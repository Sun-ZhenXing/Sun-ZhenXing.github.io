from PIL import Image
concrete = [
    (255, 255, 255),
    (255, 102, 0),
    (153, 51, 153),
    (51, 153, 204),
    (255, 204, 51),
    (102, 204, 51),
    (204, 102, 153),
    (50, 50, 50),
    (124, 124, 124),
    (21, 117, 133),
    (98, 30, 153),
    (43, 43, 140),
    (95, 59, 31),
    (73, 90, 36),
    (139, 31, 31),
    (0, 0, 0)
]
def dp(v1, v2):
    return ((v1[0]-v2[0])**2 + (v1[1]-v2[1])**2 + (v1[2]-v2[2])**2)**0.5
def findnear(color):
    mins = 50000000
    index = 0
    for i in range(len(concrete)):
        d = dp(color, concrete[i])
        if d < mins:
            mins = d
            index = i
    return index
if __name__ == "__main__":
    orgin = (0, 10, 0)
    img = Image.open('148.jpg')
    # cmds = "fill 0 10 0 {} 10 {} concrete 0".format(img.width, img.height)
    cmds = "say 开始啦！"
    for x in range(img.width):
        cmds += f"\nfill {x + orgin[0]} {orgin[1]} {orgin[2]} {x + orgin[0]} {orgin[1]} {orgin[2] + img.height - 1} concrete 0"
    for x in range(img.width):
        for y in range(img.height):
            color = img.getpixel((x, y))
            index = findnear(color)
            if index == 0:
                pass
            else:
                cmds += f"\nsetblock {x + orgin[0]} {orgin[1]} {y + orgin[2]} concrete {index}"
    with open("output.mcfunction", "w", encoding='utf-8') as f:
        f.write(cmds)
        f.close()
