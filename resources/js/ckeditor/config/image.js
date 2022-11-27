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
                icon: "original",
            },
            {
                name: "resizeImage:40",
                value: "40",
                icon: "small",
            },
            {
                name: "resizeImage:50",
                value: "50",
                icon: "medium",
            },
            {
                name: "resizeImage:60",
                value: "60",
                icon: "large",
            },
        ],
        toolbar: [
            "imageBrowser",
            "imageStyle:full",
            "imageStyle:alignLeft",
            "imageStyle:alignCenter",
            "imageStyle:alignRight",
            "imageTextAlternative",
            "resizeImage:40",
            "resizeImage:50",
            "resizeImage:60",
            "resizeImage:original",
        ],
        styles: ["full", "alignLeft", "alignCenter", "alignRight"],
    },
};
