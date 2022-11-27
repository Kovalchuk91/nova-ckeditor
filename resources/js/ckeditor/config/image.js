/**
 * https://ckeditor.com/docs/ckeditor5/latest/features/image.html
 */
export default {
    image: {
        upload: {
            types: ["gif", "png", "jpg", "jpeg", "webp"],
        },
        resizeOptions: [
            {
                name: "resizeImage:original",
                value: null,
            },
            {
                name: "resizeImage:40",
                value: "40",
            },
            {
                name: "resizeImage:50",
                value: "50",
            },
            {
                name: "resizeImage:60",
                value: "60",
            },
        ],
        toolbar: [
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "resizeImage",
        ],
        styles: ["full", "alignLeft", "alignCenter", "alignRight"],
    },
};
