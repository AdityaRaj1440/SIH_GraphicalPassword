import requests, collections, json
from bs4 import BeautifulSoup

data = collections.defaultdict(dict)

def image_write_text(search, inum):

    topic = search.replace(' ', '+')
    jsn = open('data.json', 'a')

    x = 0
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

                link = 'https:' + img_source

                f.write(link)
                print('writing image: ' + str(x) + ' ' + link, end=' ')
                x = int(x) + 1
                data[topic][x] = link
                if x == inum:
                    json.dump(data, jsn, indent=4)
                    exit(0)

if __name__ == "__main__":
    image_write_text(input('Search: '), int(input('Number of Images: ')))
