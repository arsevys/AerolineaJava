$(function(){
    $("#vector-map").dxVectorMap({
        bounds: [-180, 85, 180, -60],
        tooltip: {
            enabled: true,
            border: {
                visible: false
            },
            font: { color: "#fff" },
            customizeTooltip: function (arg) {
                var name = arg.attribute("name"),
                    country = countries[name];
                    console.log(name);
                if (country) {
                    return { text: name + ": " + country.totalArea + "pasajes disponibles", color: country.color };
                }
            }
        },
        layers: {
            dataSource: DevExpress.viz.map.sources.world,
            customize: function (elements) {
                $.each(elements, function (_, element) {
                    var country = countries[element.attribute("name")];
                    if (country) {
                        element.applySettings({
                            color: country.color,
                            hoveredColor: "#e0e000",
                            selectedColor: "#008f00"
                        });
                    }
                });
            }
        },
        onClick: function (e) {
            var target = e.target;
            if (target && countries[target.attribute("name")]) {
                target.selected(!target.selected());
            }
        }
    });
});