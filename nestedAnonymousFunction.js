var OtherPlantMaterialPriceExistRemoveDuplicates = [{
    EnableExistingPlantMessage: true,
    ExistingConditionalNo: null,
    ExistingInfoCategory: null,
    ExistingInfoRecordNo: null,
    ExistingPlantMessage: null,
    checked: false,
    currency: "",
    materialCode: "BC01P8215",
    newPrice: 0,
    oldPrice: 0,
    orderUOM: "",
    parLineNumber: "001",
    parNumber: "",
    plantCode: "CHE1",
    price: 254.25,
    status: "IN",
    validFrom: null,
    validTo: null,
    vendorCode: "LS00405"
}];
var OtherPlantMaterialPriceExist = OtherPlantMaterialPriceExistRemoveDuplicates.filter(
    (function(temp)
    {
        console.log("temp", temp)
        return function(a)
        {
            console.log("a", a)
            return (function(k)
            {
                console.log("k", k)
                return !temp[k] && (temp[k] = true);
            })

                (a.plantCode + '|' + a.materialCode);
        };
    })(Object.create(null)));
