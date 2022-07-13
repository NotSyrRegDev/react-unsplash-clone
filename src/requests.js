
 const randomNumber = Math.floor(Math.random() *56);
 const randomNumber_2 = Math.floor(Math.random() *1084);

const requests = {
   
    fetchSpecificImage: 'https://picsum.photos/id/237/200/300',
    grayScaleImages: 'https://picsum.photos/200/300?grayscale',
    blueImages: 'https://picsum.photos/200/300/?blur=2',
    random_List_18_Images: `https://picsum.photos/v2/list?page=${randomNumber}&limit=12`,
    List_18_Images: `https://picsum.photos/v2/list?page=1&limit=4`,
    fetchHomePageImage: `https://picsum.photos/id/${randomNumber_2}/info`
    


}

 export default requests;