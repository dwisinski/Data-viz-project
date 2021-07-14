# Data Visualization Project
Dave Wisinski
----
June 2021
----
----

## Purpose

The purpose of the project is to demonstrate a number of exploratory data visualization concepts using historical crime data from the [Chicago Data Portal](https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2). Cleaned data was subsequently processed for visualization using javascript and the D3.js library. Please see the GitHub Pages for the bar chart visualization [here](https://dwisinski.github.io/Data-viz-project/location_bar.html) and the heatmap visualization [here](https://dwisinski.github.io/Data-viz-project/heatmap.html).

## Source Data

Data was retrieved from the Chicago Data Portal via API request from the JupyterLab environment. Data was pulled from the most recent complete three year period (2018 - 2020). Data was cleaned primarily using the pandas library for Python and exported in .csv format.

## Data Visualizations

The bar chart visualization is intended to illustrate the top ten most common locations recorded for each type of crime, selectable from the dropdown menu. The size of the bar indicates the proportional difference in occurrences at each location type (i.e. locations with larger bars have more frequent occurrences of the indicated type of crime). A tooltip provides the exact frequency count on hover.

The heatmap visualization is intended to illustrate the seasonality component for each type of crime recorded (i.e. each type of crime is color-scaled on a calendar basis individually by row). The min/max color scale at the bottom of the illustration provides a color code ranging from dark green (min values) to dark red (max values). As confirmed by various studies, crime (and particularly violent crime) tends to spike with warmer temperatures. This is confirmed via the illustration which demonstrates a clear pattern of concentrated maximum values for many types of crime during the months of May - August. A tooltip provides exact frequency counts by month, as well as annualized percentage values (month total over yearly total) on hover.

## Notes

Python code used to perform data cleaning is located in the Jupyter Notebook files. Output data (.csv and javascript files) are located in the static folder.