import cv2

im = cv2.imread("test.png")
im = cv2.resize(im,(1000,500))

imheight = im.shape[0]
imwidth = im.shape[1]

y1 = 0
M = imheight//20
N = imwidth//20

for y in range(0, imheight, M):
    for x in range(0, imwidth, N):
        y1 = y + M
        x1 = x + N
        tiles = im[y:y+M, x:x+N]

        cv2.rectangle(im, (x, y), (x1, y1), (0,255,0))
        cv2.imwrite("save/" + str(x) + '_' + str(y)+".png",tiles)


cv2.imwrite("ass.png", im)
