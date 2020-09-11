import { FormControlLabel, Grid, Radio, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
	{
		"name": "Aug 3",
		"Total": 18,
		"Sept10": 16,
		"Sept9": 15,
		"Sept8": 15,
		"Sept7": 15,
		"Sept4": 15,
		"Sept3": 15
	},
	{
		"name": "Aug 4",
		"nodata" : 0,
		"Sept10": 18,
		"Sept9": 17,
		"Sept8": 17,
		"Sept7": 17,
		"Sept4": 17,
		"Sept3": 17
	},
	{
		"name": "Aug 5",
		"nodata" : 0,
		"Sept10": 20,
		"Sept9": 19,
		"Sept8": 19,
		"Sept7": 19,
		"Sept4": 19,
		"Sept3": 19
	},
	{
		"name": "Aug 6",
		"nodata" : 0,
		"Sept10": 22,
		"Sept9": 22,
		"Sept8": 21,
		"Sept7": 21,
		"Sept4": 21,
		"Sept3": 22
	},
	{
		"name": "Aug 7",
		"nodata" : 0,
		"Sept10": 25,
		"Sept9": 24,
		"Sept8": 24,
		"Sept7": 24,
		"Sept4": 24,
		"Sept3": 24
	},
	{
		"name": "Aug 8",
		"nodata" : 0,
		"Sept10": 28,
		"Sept9": 27,
		"Sept8": 27,
		"Sept7": 27,
		"Sept4": 27,
		"Sept3": 27
	},
	{
		"name": "Aug 9",
		"nodata" : 0,
		"Sept10": 31,
		"Sept9": 31,
		"Sept8": 31,
		"Sept7": 30,
		"Sept4": 31,
		"Sept3": 31
	},
	{
		"name": "Aug 10",
		"Total": 44,
		"Sept10": 35,
		"Sept9": 35,
		"Sept8": 34,
		"Sept7": 34,
		"Sept4": 34,
		"Sept3": 35
	},
	{
		"name": "Aug 11",
		"nodata" : 0,
		"Sept10": 39,
		"Sept9": 39,
		"Sept8": 39,
		"Sept7": 39,
		"Sept4": 39,
		"Sept3": 39
	},
	{
		"name": "Aug 12",
		"nodata" : 0,
		"Sept10": 44,
		"Sept9": 44,
		"Sept8": 43,
		"Sept7": 43,
		"Sept4": 43,
		"Sept3": 44
	},
	{
		"name": "Aug 13",
		"nodata" : 0,
		"Sept10": 50,
		"Sept9": 49,
		"Sept8": 49,
		"Sept7": 49,
		"Sept4": 49,
		"Sept3": 49
	},
	{
		"name": "Aug 14",
		"nodata" : 0,
		"Sept10": 56,
		"Sept9": 55,
		"Sept8": 55,
		"Sept7": 55,
		"Sept4": 55,
		"Sept3": 55
	},
	{
		"name": "Aug 15",
		"nodata" : 0,
		"Sept10": 62,
		"Sept9": 62,
		"Sept8": 62,
		"Sept7": 62,
		"Sept4": 62,
		"Sept3": 62
	},
	{
		"name": "Aug 16",
		"nodata" : 0,
		"Sept10": 70,
		"Sept9": 70,
		"Sept8": 70,
		"Sept7": 70,
		"Sept4": 70,
		"Sept3": 70
	},
	{
		"name": "Aug 17",
		"Total": 67,
		"Sept10": 79,
		"Sept9": 78,
		"Sept8": 78,
		"Sept7": 78,
		"Sept4": 78,
		"Sept3": 78
	},
	{
		"name": "Aug 18",
		"Total": 75,
		"Sept10": 88,
		"Sept9": 88,
		"Sept8": 88,
		"Sept7": 88,
		"Sept4": 88,
		"Sept3": 88
	},
	{
		"name": "Aug 19",
		"nodata" : 0,
		"Sept10": 99,
		"Sept9": 99,
		"Sept8": 99,
		"Sept7": 99,
		"Sept4": 99,
		"Sept3": 99
	},
	{
		"name": "Aug 20",
		"nodata" : 0,
		"Sept10": 111,
		"Sept9": 111,
		"Sept8": 111,
		"Sept7": 111,
		"Sept4": 111,
		"Sept3": 111
	},
	{
		"name": "Aug 21",
		"Total": 103,
		"Sept10": 125,
		"Sept9": 125,
		"Sept8": 125,
		"Sept7": 125,
		"Sept4": 125,
		"Sept3": 124
	},
	{
		"name": "Aug 22",
		"nodata" : 0,
		"Sept10": 140,
		"Sept9": 140,
		"Sept8": 141,
		"Sept7": 141,
		"Sept4": 141,
		"Sept3": 140
	},
	{
		"name": "Aug 23",
		"nodata" : 0,
		"Sept10": 157,
		"Sept9": 158,
		"Sept8": 158,
		"Sept7": 159,
		"Sept4": 158,
		"Sept3": 157
	},
	{
		"name": "Aug 24",
		"nodata" : 0,
		"Sept10": 176,
		"Sept9": 177,
		"Sept8": 178,
		"Sept7": 178,
		"Sept4": 178,
		"Sept3": 176
	},
	{
		"name": "Aug 25",
		"Total": 149,
		"Sept10": 198,
		"Sept9": 199,
		"Sept8": 200,
		"Sept7": 201,
		"Sept4": 200,
		"Sept3": 198
	},
	{
		"name": "Aug 26",
		"Total": 206,
		"Sept10": 222,
		"Sept9": 224,
		"Sept8": 225,
		"Sept7": 226,
		"Sept4": 225,
		"Sept3": 223
	},
	{
		"name": "Aug 27",
		"nodata" : 0,
		"Sept10": 249,
		"Sept9": 252,
		"Sept8": 254,
		"Sept7": 254,
		"Sept4": 253,
		"Sept3": 250
	},
	{
		"name": "Aug 28",
		"Total": 260,
		"Sept10": 280,
		"Sept9": 283,
		"Sept8": 285,
		"Sept7": 286,
		"Sept4": 285,
		"Sept3": 281
	},
	{
		"name": "Aug 29",
		"nodata" : 0,
		"Sept10": 314,
		"Sept9": 318,
		"Sept8": 321,
		"Sept7": 321,
		"Sept4": 321,
		"Sept3": 316
	},
	{
		"name": "Aug 30",
		"nodata" : 0,
		"Sept10": 352,
		"Sept9": 358,
		"Sept8": 361,
		"Sept7": 362,
		"Sept4": 361,
		"Sept3": 355
	},
	{
		"name": "Aug 31",
		"Total": 378,
		"Sept10": 396,
		"Sept9": 402,
		"Sept8": 406,
		"Sept7": 407,
		"Sept4": 406,
		"Sept3": 399
	},
	{
		"name": "Sept 1",
		"Total": 551,
		"Sept10": 444,
		"Sept9": 452,
		"Sept8": 456,
		"Sept7": 458,
		"Sept4": 456,
		"Sept3": 448
	},
	{
		"name": "Sept 2",
		"Total": 624,
		"Sept10": 498,
		"Sept9": 508,
		"Sept8": 513,
		"Sept7": 515,
		"Sept4": 513,
		"Sept3": 503
	},
	{
		"name": "Sept 3",
		"Total": 671,
		"Sept10": 559,
		"Sept9": 571,
		"Sept8": 577,
		"Sept7": 579,
		"Sept4": 577,
		"Sept3": 565
	},
	{
		"name": "Sept 4",
		"Total": 717,
		"Sept10": 628,
		"Sept9": 641,
		"Sept8": 649,
		"Sept7": 652,
		"Sept4": 649,
		"Sept3": 635
	},
	{
		"name": "Sept 5",
		"nodata" : 0,
		"Sept10": 704,
		"Sept9": 721,
		"Sept8": 730,
		"Sept7": 733,
		"Sept4": 730,
		"Sept3": 714
	},
	{
		"name": "Sept 6",
		"nodata" : 0,
		"Sept10": 791,
		"Sept9": 810,
		"Sept8": 822,
		"Sept7": 825,
		"Sept4": 821,
		"Sept3": 802
	},
	{
		"name": "Sept 7",
		"Total": 945,
		"Sept10": 887,
		"Sept9": 910,
		"Sept8": 924,
		"Sept7": 928,
		"Sept4": 924,
		"Sept3": 901
	},
	{
		"name": "Sept 8",
		"Total": 1020,
		"Sept10": 996,
		"Sept9": 1023,
		"Sept8": 1039,
		"Sept7": 1044,
		"Sept4": 1039,
		"Sept3": 1012
	},
	{
		"name": "Sept 9",
		"Total": 1055,
		"Sept10": 1118,
		"Sept9": 1150,
		"Sept8": 1169,
		"Sept7": 1174,
		"Sept4": 1168,
		"Sept3": 1137
	},
	{
		"name": "Sept 10",
		"Total": 1064,
		"Sept10": 1255,
		"Sept9": 1292,
		"Sept8": 1315,
		"Sept7": 1321,
		"Sept4": 1314,
		"Sept3": 1277
	}
];

const oneweek = [
	{
		"name": "Aug 3",
		"Total": 18,
		"Sept10": 16,
		"Sept9": 15,
		"Sept8": 15,
		"Sept7": 15,
		"Sept4": 15,
		"Sept3": 15
	},
	{
		"name": "Aug 4",
		"nodata" : 0,
		"Sept10": 18,
		"Sept9": 17,
		"Sept8": 17,
		"Sept7": 17,
		"Sept4": 17,
		"Sept3": 17
	},
	{
		"name": "Aug 5",
		"nodata" : 0,
		"Sept10": 20,
		"Sept9": 19,
		"Sept8": 19,
		"Sept7": 19,
		"Sept4": 19,
		"Sept3": 19
	},
	{
		"name": "Aug 6",
		"nodata" : 0,
		"Sept10": 22,
		"Sept9": 22,
		"Sept8": 21,
		"Sept7": 21,
		"Sept4": 21,
		"Sept3": 22
	},
	{
		"name": "Aug 7",
		"nodata" : 0,
		"Sept10": 25,
		"Sept9": 24,
		"Sept8": 24,
		"Sept7": 24,
		"Sept4": 24,
		"Sept3": 24
	},
	{
		"name": "Aug 8",
		"nodata" : 0,
		"Sept10": 28,
		"Sept9": 27,
		"Sept8": 27,
		"Sept7": 27,
		"Sept4": 27,
		"Sept3": 27
	},
	{
		"name": "Aug 9",
		"nodata" : 0,
		"Sept10": 31,
		"Sept9": 31,
		"Sept8": 31,
		"Sept7": 30,
		"Sept4": 31,
		"Sept3": 31
	},
	{
		"name": "Aug 10",
		"Total": 44,
		"Sept10": 35,
		"Sept9": 35,
		"Sept8": 34,
		"Sept7": 34,
		"Sept4": 34,
		"Sept3": 35
	},
	{
		"name": "Aug 11",
		"nodata" : 0,
		"Sept10": 39,
		"Sept9": 39,
		"Sept8": 39,
		"Sept7": 39,
		"Sept4": 39,
		"Sept3": 39
	},
	{
		"name": "Aug 12",
		"nodata" : 0,
		"Sept10": 44,
		"Sept9": 44,
		"Sept8": 43,
		"Sept7": 43,
		"Sept4": 43,
		"Sept3": 44
	},
	{
		"name": "Aug 13",
		"nodata" : 0,
		"Sept10": 50,
		"Sept9": 49,
		"Sept8": 49,
		"Sept7": 49,
		"Sept4": 49,
		"Sept3": 49
	},
	{
		"name": "Aug 14",
		"nodata" : 0,
		"Sept10": 56,
		"Sept9": 55,
		"Sept8": 55,
		"Sept7": 55,
		"Sept4": 55,
		"Sept3": 55
	},
	{
		"name": "Aug 15",
		"nodata" : 0,
		"Sept10": 62,
		"Sept9": 62,
		"Sept8": 62,
		"Sept7": 62,
		"Sept4": 62,
		"Sept3": 62
	},
	{
		"name": "Aug 16",
		"nodata" : 0,
		"Sept10": 70,
		"Sept9": 70,
		"Sept8": 70,
		"Sept7": 70,
		"Sept4": 70,
		"Sept3": 70
	},
	{
		"name": "Aug 17",
		"Total": 67,
		"Sept10": 79,
		"Sept9": 78,
		"Sept8": 78,
		"Sept7": 78,
		"Sept4": 78,
		"Sept3": 78
	},
	{
		"name": "Aug 18",
		"Total": 75,
		"Sept10": 88,
		"Sept9": 88,
		"Sept8": 88,
		"Sept7": 88,
		"Sept4": 88,
		"Sept3": 88
	},
	{
		"name": "Aug 19",
		"nodata" : 0,
		"Sept10": 99,
		"Sept9": 99,
		"Sept8": 99,
		"Sept7": 99,
		"Sept4": 99,
		"Sept3": 99
	},
	{
		"name": "Aug 20",
		"nodata" : 0,
		"Sept10": 111,
		"Sept9": 111,
		"Sept8": 111,
		"Sept7": 111,
		"Sept4": 111,
		"Sept3": 111
	},
	{
		"name": "Aug 21",
		"Total": 103,
		"Sept10": 125,
		"Sept9": 125,
		"Sept8": 125,
		"Sept7": 125,
		"Sept4": 125,
		"Sept3": 124
	},
	{
		"name": "Aug 22",
		"nodata" : 0,
		"Sept10": 140,
		"Sept9": 140,
		"Sept8": 141,
		"Sept7": 141,
		"Sept4": 141,
		"Sept3": 140
	},
	{
		"name": "Aug 23",
		"nodata" : 0,
		"Sept10": 157,
		"Sept9": 158,
		"Sept8": 158,
		"Sept7": 159,
		"Sept4": 158,
		"Sept3": 157
	},
	{
		"name": "Aug 24",
		"nodata" : 0,
		"Sept10": 176,
		"Sept9": 177,
		"Sept8": 178,
		"Sept7": 178,
		"Sept4": 178,
		"Sept3": 176
	},
	{
		"name": "Aug 25",
		"Total": 149,
		"Sept10": 198,
		"Sept9": 199,
		"Sept8": 200,
		"Sept7": 201,
		"Sept4": 200,
		"Sept3": 198
	},
	{
		"name": "Aug 26",
		"Total": 206,
		"Sept10": 222,
		"Sept9": 224,
		"Sept8": 225,
		"Sept7": 226,
		"Sept4": 225,
		"Sept3": 223
	},
	{
		"name": "Aug 27",
		"nodata" : 0,
		"Sept10": 249,
		"Sept9": 252,
		"Sept8": 254,
		"Sept7": 254,
		"Sept4": 253,
		"Sept3": 250
	},
	{
		"name": "Aug 28",
		"Total": 260,
		"Sept10": 280,
		"Sept9": 283,
		"Sept8": 285,
		"Sept7": 286,
		"Sept4": 285,
		"Sept3": 281
	},
	{
		"name": "Aug 29",
		"nodata" : 0,
		"Sept10": 314,
		"Sept9": 318,
		"Sept8": 321,
		"Sept7": 321,
		"Sept4": 321,
		"Sept3": 316
	},
	{
		"name": "Aug 30",
		"nodata" : 0,
		"Sept10": 352,
		"Sept9": 358,
		"Sept8": 361,
		"Sept7": 362,
		"Sept4": 361,
		"Sept3": 355
	},
	{
		"name": "Aug 31",
		"Total": 378,
		"Sept10": 396,
		"Sept9": 402,
		"Sept8": 406,
		"Sept7": 407,
		"Sept4": 406,
		"Sept3": 399
	},
	{
		"name": "Sept 1",
		"Total": 551,
		"Sept10": 444,
		"Sept9": 452,
		"Sept8": 456,
		"Sept7": 458,
		"Sept4": 456,
		"Sept3": 448
	},
	{
		"name": "Sept 2",
		"Total": 624,
		"Sept10": 498,
		"Sept9": 508,
		"Sept8": 513,
		"Sept7": 515,
		"Sept4": 513,
		"Sept3": 503
	},
	{
		"name": "Sept 3",
		"Total": 671,
		"Sept10": 559,
		"Sept9": 571,
		"Sept8": 577,
		"Sept7": 579,
		"Sept4": 577,
		"Sept3": 565
	},
	{
		"name": "Sept 4",
		"Total": 717,
		"Sept10": 628,
		"Sept9": 641,
		"Sept8": 649,
		"Sept7": 652,
		"Sept4": 649,
		"Sept3": 635
	},
	{
		"name": "Sept 5",
		"nodata" : 0,
		"Sept10": 704,
		"Sept9": 721,
		"Sept8": 730,
		"Sept7": 733,
		"Sept4": 730,
		"Sept3": 714
	},
	{
		"name": "Sept 6",
		"nodata" : 0,
		"Sept10": 791,
		"Sept9": 810,
		"Sept8": 822,
		"Sept7": 825,
		"Sept4": 821,
		"Sept3": 802
	},
	{
		"name": "Sept 7",
		"Total": 945,
		"Sept10": 887,
		"Sept9": 910,
		"Sept8": 924,
		"Sept7": 928,
		"Sept4": 924,
		"Sept3": 901
	},
	{
		"name": "Sept 8",
		"Total": 1020,
		"Sept10": 996,
		"Sept9": 1023,
		"Sept8": 1039,
		"Sept7": 1044,
		"Sept4": 1039,
		"Sept3": 1012
	},
	{
		"name": "Sept 9",
		"Total": 1055,
		"Sept10": 1118,
		"Sept9": 1150,
		"Sept8": 1169,
		"Sept7": 1174,
		"Sept4": 1168,
		"Sept3": 1137
	},
	{
		"name": "Sept 10",
		"Total": 1064,
		"Sept10": 1255,
		"Sept9": 1292,
		"Sept8": 1315,
		"Sept7": 1321,
		"Sept4": 1314,
		"Sept3": 1277
	},
	{
		"name": "Sept 11",
		"nodata" : 0,
		"Sept10": 1408,
		"Sept9": 1452,
		"Sept8": 1479,
		"Sept7": 1486,
		"Sept4": 1478,
		"Sept3": 1435
	},
	{
		"name": "Sept 12",
		"nodata" : 0,
		"Sept10": 1580,
		"Sept9": 1632,
		"Sept8": 1664,
		"Sept7": 1672,
		"Sept4": 1662,
		"Sept3": 1612
	},
	{
		"name": "Sept 13",
		"nodata" : 0,
		"Sept10": 1774,
		"Sept9": 1834,
		"Sept8": 1871,
		"Sept7": 1881,
		"Sept4": 1870,
		"Sept3": 1811
	},
	{
		"name": "Sept 14",
		"nodata" : 0,
		"Sept10": 1991,
		"Sept9": 2061,
		"Sept8": 2105,
		"Sept7": 2116,
		"Sept4": 2103,
		"Sept3": 2034
	},
	{
		"name": "Sept 15",
		"nodata" : 0,
		"Sept10": 2234,
		"Sept9": 2317,
		"Sept8": 2367,
		"Sept7": 2380,
		"Sept4": 2365,
		"Sept3": 2286
	},
	{
		"name": "Sept 16",
		"nodata" : 0,
		"Sept10": 2508,
		"Sept9": 2604,
		"Sept8": 2662,
		"Sept7": 2677,
		"Sept4": 2660,
		"Sept3": 2568
	},
	{
		"name": "Sept 17",
		"nodata" : 0,
		"Sept10": 2814,
		"Sept9": 2926,
		"Sept8": 2995,
		"Sept7": 3012,
		"Sept4": 2992,
		"Sept3": 2885
	}
];

const RedSwitch = withStyles({
    switchBase: {
        color: grey[300],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Switch);

const RedRadio = withStyles({
    root: {
        color: grey[700],
        '&$checked': {
            color: red[700],
        },
        '&$checked + $track': {
            backgroundColor: red[700],
        },
    },
    checked: {},
    track: {},
})(Radio);

class Totalclass extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            OneWeek: true,
            TwoWeeks: true,
            data: {},
            LogView: true
        };
    }

    // constructor() {
    //     super();
    //     this.state = {
    //       name: "React"
    //     };
    //     this.onChangeValue = this.onChangeValue.bind(this);
    //   }
    
      onChangeValue(event) {
        console.log(event.target.value);
      }

    render() {
        return (
            <div className='responsivecontainer'>
                <svg width="100%" height="139">
                    <g>
                        <rect width="100%" height="100%" fill="#B32317" />
                        <text x="50%" y="84%" font-size="16" fill="white" textAnchor="middle">Powered by a concerned Red Raider</text>
                    </g>
                </svg>
                <h1></h1>
                <h3 style={{ marginBottom: 5 }}>Total Reported Cases</h3>
                <a><i><font size="2">Last updated Thursday, September 10 at 6:15pm.</font></i></a>
                <center>
                    <div>
                        <BrowserView>


                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'65%'} height={"65%"} aspect='2.2'>

                                {this.state.OneWeek ? (
                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <CartesianGrid />
                                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                )

                                    : (
                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                            <CartesianGrid />
                                            <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                            <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="12" /></Bar>
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>
                                    )}
                            </ResponsiveContainer>
                        </BrowserView>

                        <MobileView>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel con   trol={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projection - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={"99%"} aspect='1'>

                                {this.state.OneWeek ? (

                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                        <CartesianGrid />
                                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                        <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (
                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                            <CartesianGrid />
                                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 150']} fontSize="12" />)}
                                            <Bar dataKey="Total" fill="#333333" ><LabelList dataKey="Total" position="top" fontSize="7" /></Bar>
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>

                                    )}

                            </ResponsiveContainer>
                        </MobileView>

                        <br />

                        <BrowserView>
                            <div className="adjustabletext">
                                <Grid container spacing={5}>
                                    <Grid item xs alignItems={"left"}>
                                        <h4>Notable Dates</h4>
                                        <font size="4"><p style={{ textAlign: "left" }}>
                                            <li>August 3: Campus doors opened<br /></li>
                                            <li>August 8: Dorms open for move-in<br /></li>
                                            <li>August 24: First day of MWF classes<br /></li>
                                            <li>August 25: First day of TR classes<br /></li>
                                            <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                            <li>September 4: Opening of on-campus testing center<br /></li>
                                            <li>September 5-7: Labor Day weekend<br /></li>
                                            <li>September 9: Census Date for Texas Tech<br /></li>
                                            <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                            <li>September 12: First football game, played at home</li>
                                            <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                        </p></font>
                                    </Grid>
                                    <Grid item xs>
                                        <h4>How are projections made?</h4>
                                        <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                        <h4>Why are there two?</h4>
                                        <p><font size="4">A new projection is generated when a count update is released for the day. The <b>solid</b> line is the most recent projection, and the <b>dashed</b> line the projection from one week before. </font></p>
                                        <h4>What is logarithmic sclae?</h4>
                                        <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>

                                    </Grid>
                                </Grid>
                            </div>
                        </BrowserView>


                        <MobileView>
                            <div className="adjustabletextmobile">
                                <h4>Notable Dates</h4>
                                <font size="4"><p style={{ textAlign: "left" }}>
                                    <li>August 3: Campus doors opened<br /></li>
                                    <li>August 8: Dorms open for move-in<br /></li>
                                    <li>August 24: First day of MWF classes<br /></li>
                                    <li>August 25: First day of TR classes<br /></li>
                                    <li>Week of August 31: Some classes shift online for two weeks<br /></li>
                                    <li>September 4: Opening of on-campus testing center<br /></li>
                                    <li>September 5-7: Labor Day weekend<br /></li>
                                    <li>September 9: Census Date for Texas Tech<br /></li>
                                    <li>September 9: Last day to drop a course and have charges removed<br /></li>
                                    <li>September 12: First football game, played at home</li>
                                    <li>September 21: Last day to withdraw and receive partial financial credit<br /></li>
                                </p></font>
                                <h4>What are these curves?</h4>
                                <p><font size="4">They are <b>exponential regression curves</b>. They are made by analyzing how fast cases have increased. It is only based on Texas Tech's past data. The projection <b>does not</b> consider changes in circumstances, such as an increase in hand-washing or an increase in house parties.</font></p>
                                <h4>Why are there so two?</h4>
                                <p><font size="4">A new projection is generated when a count update is released for the day. The <b>solid</b> line is the most recent projection, and the <b>dashed</b> line the projection from one week before. </font></p>
                                <h4>What is logarithmic sclae?</h4>
                                <p><font size="4">Sometimes, case counts can increase so rapidly it's hard see if the growth rate is getting better or worse. A logarithmic scale is a more helpful way to see that. Instead of our y-axis ticks increasing by the same constant (such as 1, 2, 3 or 50, 100, 150), they increase by the same proportion. For example, 20, 200, and 2000 each increase tenfold.  </font></p>
                            </div>
                        </MobileView>
                    </div>
                </center>
            </div>
        )
    }
}

export default Totalclass;