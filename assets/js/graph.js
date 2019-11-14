queue()
    .defer(d3.csv, "assets/data/horseresults.csv")
    .await(makeGraphs);

function makeGraphs(error, horseData) {
    var ndx = crossfilter(horseData);

    points_per_month(ndx);
    total_points(ndx);

    dc.renderAll();
};

function total_points(ndx) {
    var month_dim = ndx.dimension(dc.pluck("month"));
    var total_points = month_dim.group().reduceSum(dc.pluck("Points"));

    dc.barChart('#total-points')
        .width(window.innerWidth)
        .height(window.innerHeight)
        .margins({
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        })
        .dimension(month_dim)
        .group(total_points)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Month")
        .yAxis().ticks(10);
};

function points_per_month(ndx) {
    var month_dim = ndx.dimension(dc.pluck("month"));
    var total_points = month_dim.group().reduceSum(dc.pluck("Points"));

    dc.barChart('#per-month')
        .width(window.innerWidth)
        .height(window.innerHeight)
        .margins({
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
        })
        .dimension(month_dim)
        .group(points_per_month)
        .transitionDuration(1000)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Month")
        .yAxis().ticks(10);
};