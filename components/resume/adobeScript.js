document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
    let adobeDCView = new AdobeDC.View({clientId: "d08eb1e11d084244819c22f5389b6af6"});
    adobeDCView.previewFile({
        content:{location: {url: "https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf"}},
        metaData:{fileName: "Bodea Brochure.pdf"}
    }, {embedMode: "LIGHT_BOX"});
});