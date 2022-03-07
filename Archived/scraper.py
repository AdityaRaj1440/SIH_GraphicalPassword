import os, requests, time
from bs4 import BeautifulSoup


def image_write_text(search, inum):

    topic = search.replace(' ', '+')

    x = 1
    page_number = 0

    while True:
        url = 'https://imgur.com/search/score/all/page/' + str(page_number) + '?scrolled&q=' + topic + '&q_size_is_mpx=off'

        r = requests.get(url)
        soup = BeautifulSoup(r.text, 'html.parser')
        images = soup.find_all('img')
        page_number = page_number + 1
        if images:

            f = open(topic + '.txt', 'a')

            for image in images:
                img_source = image['src']

                if img_source == '//s.imgur.com/images/loaders/ddddd1_181817/48.gif':
                    continue

                f.write('https:' + img_source + '\n')
                print('writing image: ' + str(x) + ' [' + 'https:' + img_source + ']')
                x = int(x) + 1
                if x == inum+1:
                    exit(0)
        else:
            break


image_write_text(input('Search: '), int(input('Number of Images: ')))