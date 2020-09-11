import { FormControlLabel, Grid, Switch } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { BrowserView, MobileView } from "react-device-detect";
import React, { Component } from 'react';
import { Bar, CartesianGrid, ComposedChart, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const zeroweeks = [
	{
		"name": "Aug 3",
		"Active": 18,
		"Sept10": 12,
		"Sept9": 11,
		"Sept8": 11,
		"Sept7": 11,
		"Sept4": 11,
		"Sept3": 11
	},
	{
		"name": "Aug 4",
		"nodata" : 0,
		"Sept10": 13,
		"Sept9": 12,
		"Sept8": 12,
		"Sept7": 12,
		"Sept4": 12,
		"Sept3": 12
	},
	{
		"name": "Aug 5",
		"nodata" : 0,
		"Sept10": 15,
		"Sept9": 14,
		"Sept8": 14,
		"Sept7": 14,
		"Sept4": 14,
		"Sept3": 14
	},
	{
		"name": "Aug 6",
		"nodata" : 0,
		"Sept10": 16,
		"Sept9": 16,
		"Sept8": 15,
		"Sept7": 15,
		"Sept4": 15,
		"Sept3": 15
	},
	{
		"name": "Aug 7",
		"nodata" : 0,
		"Sept10": 18,
		"Sept9": 18,
		"Sept8": 17,
		"Sept7": 17,
		"Sept4": 17,
		"Sept3": 17
	},
	{
		"name": "Aug 8",
		"nodata" : 0,
		"Sept10": 20,
		"Sept9": 20,
		"Sept8": 19,
		"Sept7": 19,
		"Sept4": 19,
		"Sept3": 19
	},
	{
		"name": "Aug 9",
		"nodata" : 0,
		"Sept10": 23,
		"Sept9": 22,
		"Sept8": 22,
		"Sept7": 22,
		"Sept4": 22,
		"Sept3": 22
	},
	{
		"name": "Aug 10",
		"Active": 25,
		"Sept10": 25,
		"Sept9": 25,
		"Sept8": 24,
		"Sept7": 24,
		"Sept4": 24,
		"Sept3": 24
	},
	{
		"name": "Aug 11",
		"nodata" : 0,
		"Sept10": 28,
		"Sept9": 28,
		"Sept8": 27,
		"Sept7": 27,
		"Sept4": 27,
		"Sept3": 27
	},
	{
		"name": "Aug 12",
		"nodata" : 0,
		"Sept10": 32,
		"Sept9": 31,
		"Sept8": 31,
		"Sept7": 30,
		"Sept4": 30,
		"Sept3": 31
	},
	{
		"name": "Aug 13",
		"nodata" : 0,
		"Sept10": 35,
		"Sept9": 35,
		"Sept8": 34,
		"Sept7": 34,
		"Sept4": 34,
		"Sept3": 34
	},
	{
		"name": "Aug 14",
		"nodata" : 0,
		"Sept10": 39,
		"Sept9": 39,
		"Sept8": 38,
		"Sept7": 38,
		"Sept4": 38,
		"Sept3": 38
	},
	{
		"name": "Aug 15",
		"nodata" : 0,
		"Sept10": 44,
		"Sept9": 43,
		"Sept8": 43,
		"Sept7": 43,
		"Sept4": 43,
		"Sept3": 43
	},
	{
		"name": "Aug 16",
		"nodata" : 0,
		"Sept10": 49,
		"Sept9": 49,
		"Sept8": 48,
		"Sept7": 48,
		"Sept4": 48,
		"Sept3": 48
	},
	{
		"name": "Aug 17",
		"Active": 38,
		"Sept10": 55,
		"Sept9": 54,
		"Sept8": 54,
		"Sept7": 54,
		"Sept4": 54,
		"Sept3": 54
	},
	{
		"name": "Aug 18",
		"nodata" : 0,
		"Sept10": 61,
		"Sept9": 61,
		"Sept8": 61,
		"Sept7": 61,
		"Sept4": 61,
		"Sept3": 61
	},
	{
		"name": "Aug 19",
		"nodata" : 0,
		"Sept10": 68,
		"Sept9": 68,
		"Sept8": 68,
		"Sept7": 68,
		"Sept4": 68,
		"Sept3": 68
	},
	{
		"name": "Aug 20",
		"nodata" : 0,
		"Sept10": 76,
		"Sept9": 77,
		"Sept8": 77,
		"Sept7": 77,
		"Sept4": 77,
		"Sept3": 76
	},
	{
		"name": "Aug 21",
		"Active": 53,
		"Sept10": 85,
		"Sept9": 86,
		"Sept8": 86,
		"Sept7": 86,
		"Sept4": 86,
		"Sept3": 86
	},
	{
		"name": "Aug 22",
		"nodata" : 0,
		"Sept10": 95,
		"Sept9": 96,
		"Sept8": 97,
		"Sept7": 97,
		"Sept4": 97,
		"Sept3": 96
	},
	{
		"name": "Aug 23",
		"nodata" : 0,
		"Sept10": 106,
		"Sept9": 108,
		"Sept8": 108,
		"Sept7": 109,
		"Sept4": 109,
		"Sept3": 107
	},
	{
		"name": "Aug 24",
		"nodata" : 0,
		"Sept10": 119,
		"Sept9": 121,
		"Sept8": 122,
		"Sept7": 122,
		"Sept4": 122,
		"Sept3": 120
	},
	{
		"name": "Aug 25",
		"Active": 87,
		"Sept10": 133,
		"Sept9": 135,
		"Sept8": 136,
		"Sept7": 137,
		"Sept4": 137,
		"Sept3": 135
	},
	{
		"name": "Aug 26",
		"Active": 146,
		"Sept10": 148,
		"Sept9": 151,
		"Sept8": 153,
		"Sept7": 154,
		"Sept4": 154,
		"Sept3": 151
	},
	{
		"name": "Aug 27",
		"nodata" : 0,
		"Sept10": 166,
		"Sept9": 169,
		"Sept8": 172,
		"Sept7": 173,
		"Sept4": 172,
		"Sept3": 170
	},
	{
		"name": "Aug 28",
		"Active": 176,
		"Sept10": 185,
		"Sept9": 190,
		"Sept8": 193,
		"Sept7": 194,
		"Sept4": 193,
		"Sept3": 190
	},
	{
		"name": "Aug 29",
		"nodata" : 0,
		"Sept10": 207,
		"Sept9": 212,
		"Sept8": 216,
		"Sept7": 218,
		"Sept4": 217,
		"Sept3": 213
	},
	{
		"name": "Aug 30",
		"nodata" : 0,
		"Sept10": 231,
		"Sept9": 238,
		"Sept8": 243,
		"Sept7": 244,
		"Sept4": 244,
		"Sept3": 239
	},
	{
		"name": "Aug 31",
		"Active": 268,
		"Sept10": 258,
		"Sept9": 267,
		"Sept8": 272,
		"Sept7": 274,
		"Sept4": 273,
		"Sept3": 268
	},
	{
		"name": "Sept 1",
		"Active": 418,
		"Sept10": 288,
		"Sept9": 299,
		"Sept8": 306,
		"Sept7": 308,
		"Sept4": 307,
		"Sept3": 300
	},
	{
		"name": "Sept 2",
		"Active": 453,
		"Sept10": 321,
		"Sept9": 334,
		"Sept8": 343,
		"Sept7": 346,
		"Sept4": 345,
		"Sept3": 336
	},
	{
		"name": "Sept 3",
		"Active": 477,
		"Sept10": 359,
		"Sept9": 375,
		"Sept8": 385,
		"Sept7": 388,
		"Sept4": 387,
		"Sept3": 377
	},
	{
		"name": "Sept 4",
		"Active": 490,
		"Sept10": 401,
		"Sept9": 420,
		"Sept8": 432,
		"Sept7": 436,
		"Sept4": 434,
		"Sept3": 423
	},
	{
		"name": "Sept 5",
		"nodata" : 0,
		"Sept10": 447,
		"Sept9": 470,
		"Sept8": 484,
		"Sept7": 489,
		"Sept4": 487,
		"Sept3": 474
	},
	{
		"name": "Sept 6",
		"nodata" : 0,
		"Sept10": 500,
		"Sept9": 526,
		"Sept8": 543,
		"Sept7": 549,
		"Sept4": 547,
		"Sept3": 531
	},
	{
		"name": "Sept 7",
		"Active": 626,
		"Sept10": 558,
		"Sept9": 590,
		"Sept8": 610,
		"Sept7": 616,
		"Sept4": 614,
		"Sept3": 595
	},
	{
		"name": "Sept 8",
		"Active": 650,
		"Sept10": 623,
		"Sept9": 661,
		"Sept8": 684,
		"Sept7": 692,
		"Sept4": 689,
		"Sept3": 667
	},
	{
		"name": "Sept 9",
		"Active": 612,
		"Sept10": 696,
		"Sept9": 740,
		"Sept8": 768,
		"Sept7": 777,
		"Sept4": 773,
		"Sept3": 748
	},
	{
		"name": "Sept 10",
		"Active": 543,
		"Sept10": 777,
		"Sept9": 829,
		"Sept8": 861,
		"Sept7": 872,
		"Sept4": 868,
		"Sept3": 839
	}
];

const oneweek = [
	{
		"name": "Aug 3",
		"Active": 18,
		"Sept10": 12,
		"Sept9": 11,
		"Sept8": 11,
		"Sept7": 11,
		"Sept4": 11,
		"Sept3": 11
	},
	{
		"name": "Aug 4",
		"nodata" : 0,
		"Sept10": 13,
		"Sept9": 12,
		"Sept8": 12,
		"Sept7": 12,
		"Sept4": 12,
		"Sept3": 12
	},
	{
		"name": "Aug 5",
		"nodata" : 0,
		"Sept10": 15,
		"Sept9": 14,
		"Sept8": 14,
		"Sept7": 14,
		"Sept4": 14,
		"Sept3": 14
	},
	{
		"name": "Aug 6",
		"nodata" : 0,
		"Sept10": 16,
		"Sept9": 16,
		"Sept8": 15,
		"Sept7": 15,
		"Sept4": 15,
		"Sept3": 15
	},
	{
		"name": "Aug 7",
		"nodata" : 0,
		"Sept10": 18,
		"Sept9": 18,
		"Sept8": 17,
		"Sept7": 17,
		"Sept4": 17,
		"Sept3": 17
	},
	{
		"name": "Aug 8",
		"nodata" : 0,
		"Sept10": 20,
		"Sept9": 20,
		"Sept8": 19,
		"Sept7": 19,
		"Sept4": 19,
		"Sept3": 19
	},
	{
		"name": "Aug 9",
		"nodata" : 0,
		"Sept10": 23,
		"Sept9": 22,
		"Sept8": 22,
		"Sept7": 22,
		"Sept4": 22,
		"Sept3": 22
	},
	{
		"name": "Aug 10",
		"Active": 25,
		"Sept10": 25,
		"Sept9": 25,
		"Sept8": 24,
		"Sept7": 24,
		"Sept4": 24,
		"Sept3": 24
	},
	{
		"name": "Aug 11",
		"nodata" : 0,
		"Sept10": 28,
		"Sept9": 28,
		"Sept8": 27,
		"Sept7": 27,
		"Sept4": 27,
		"Sept3": 27
	},
	{
		"name": "Aug 12",
		"nodata" : 0,
		"Sept10": 32,
		"Sept9": 31,
		"Sept8": 31,
		"Sept7": 30,
		"Sept4": 30,
		"Sept3": 31
	},
	{
		"name": "Aug 13",
		"nodata" : 0,
		"Sept10": 35,
		"Sept9": 35,
		"Sept8": 34,
		"Sept7": 34,
		"Sept4": 34,
		"Sept3": 34
	},
	{
		"name": "Aug 14",
		"nodata" : 0,
		"Sept10": 39,
		"Sept9": 39,
		"Sept8": 38,
		"Sept7": 38,
		"Sept4": 38,
		"Sept3": 38
	},
	{
		"name": "Aug 15",
		"nodata" : 0,
		"Sept10": 44,
		"Sept9": 43,
		"Sept8": 43,
		"Sept7": 43,
		"Sept4": 43,
		"Sept3": 43
	},
	{
		"name": "Aug 16",
		"nodata" : 0,
		"Sept10": 49,
		"Sept9": 49,
		"Sept8": 48,
		"Sept7": 48,
		"Sept4": 48,
		"Sept3": 48
	},
	{
		"name": "Aug 17",
		"Active": 38,
		"Sept10": 55,
		"Sept9": 54,
		"Sept8": 54,
		"Sept7": 54,
		"Sept4": 54,
		"Sept3": 54
	},
	{
		"name": "Aug 18",
		"nodata" : 0,
		"Sept10": 61,
		"Sept9": 61,
		"Sept8": 61,
		"Sept7": 61,
		"Sept4": 61,
		"Sept3": 61
	},
	{
		"name": "Aug 19",
		"nodata" : 0,
		"Sept10": 68,
		"Sept9": 68,
		"Sept8": 68,
		"Sept7": 68,
		"Sept4": 68,
		"Sept3": 68
	},
	{
		"name": "Aug 20",
		"nodata" : 0,
		"Sept10": 76,
		"Sept9": 77,
		"Sept8": 77,
		"Sept7": 77,
		"Sept4": 77,
		"Sept3": 76
	},
	{
		"name": "Aug 21",
		"Active": 53,
		"Sept10": 85,
		"Sept9": 86,
		"Sept8": 86,
		"Sept7": 86,
		"Sept4": 86,
		"Sept3": 86
	},
	{
		"name": "Aug 22",
		"nodata" : 0,
		"Sept10": 95,
		"Sept9": 96,
		"Sept8": 97,
		"Sept7": 97,
		"Sept4": 97,
		"Sept3": 96
	},
	{
		"name": "Aug 23",
		"nodata" : 0,
		"Sept10": 106,
		"Sept9": 108,
		"Sept8": 108,
		"Sept7": 109,
		"Sept4": 109,
		"Sept3": 107
	},
	{
		"name": "Aug 24",
		"nodata" : 0,
		"Sept10": 119,
		"Sept9": 121,
		"Sept8": 122,
		"Sept7": 122,
		"Sept4": 122,
		"Sept3": 120
	},
	{
		"name": "Aug 25",
		"Active": 87,
		"Sept10": 133,
		"Sept9": 135,
		"Sept8": 136,
		"Sept7": 137,
		"Sept4": 137,
		"Sept3": 135
	},
	{
		"name": "Aug 26",
		"Active": 146,
		"Sept10": 148,
		"Sept9": 151,
		"Sept8": 153,
		"Sept7": 154,
		"Sept4": 154,
		"Sept3": 151
	},
	{
		"name": "Aug 27",
		"nodata" : 0,
		"Sept10": 166,
		"Sept9": 169,
		"Sept8": 172,
		"Sept7": 173,
		"Sept4": 172,
		"Sept3": 170
	},
	{
		"name": "Aug 28",
		"Active": 176,
		"Sept10": 185,
		"Sept9": 190,
		"Sept8": 193,
		"Sept7": 194,
		"Sept4": 193,
		"Sept3": 190
	},
	{
		"name": "Aug 29",
		"nodata" : 0,
		"Sept10": 207,
		"Sept9": 212,
		"Sept8": 216,
		"Sept7": 218,
		"Sept4": 217,
		"Sept3": 213
	},
	{
		"name": "Aug 30",
		"nodata" : 0,
		"Sept10": 231,
		"Sept9": 238,
		"Sept8": 243,
		"Sept7": 244,
		"Sept4": 244,
		"Sept3": 239
	},
	{
		"name": "Aug 31",
		"Active": 268,
		"Sept10": 258,
		"Sept9": 267,
		"Sept8": 272,
		"Sept7": 274,
		"Sept4": 273,
		"Sept3": 268
	},
	{
		"name": "Sept 1",
		"Active": 418,
		"Sept10": 288,
		"Sept9": 299,
		"Sept8": 306,
		"Sept7": 308,
		"Sept4": 307,
		"Sept3": 300
	},
	{
		"name": "Sept 2",
		"Active": 453,
		"Sept10": 321,
		"Sept9": 334,
		"Sept8": 343,
		"Sept7": 346,
		"Sept4": 345,
		"Sept3": 336
	},
	{
		"name": "Sept 3",
		"Active": 477,
		"Sept10": 359,
		"Sept9": 375,
		"Sept8": 385,
		"Sept7": 388,
		"Sept4": 387,
		"Sept3": 377
	},
	{
		"name": "Sept 4",
		"Active": 490,
		"Sept10": 401,
		"Sept9": 420,
		"Sept8": 432,
		"Sept7": 436,
		"Sept4": 434,
		"Sept3": 423
	},
	{
		"name": "Sept 5",
		"nodata" : 0,
		"Sept10": 447,
		"Sept9": 470,
		"Sept8": 484,
		"Sept7": 489,
		"Sept4": 487,
		"Sept3": 474
	},
	{
		"name": "Sept 6",
		"nodata" : 0,
		"Sept10": 500,
		"Sept9": 526,
		"Sept8": 543,
		"Sept7": 549,
		"Sept4": 547,
		"Sept3": 531
	},
	{
		"name": "Sept 7",
		"Active": 626,
		"Sept10": 558,
		"Sept9": 590,
		"Sept8": 610,
		"Sept7": 616,
		"Sept4": 614,
		"Sept3": 595
	},
	{
		"name": "Sept 8",
		"Active": 650,
		"Sept10": 623,
		"Sept9": 661,
		"Sept8": 684,
		"Sept7": 692,
		"Sept4": 689,
		"Sept3": 667
	},
	{
		"name": "Sept 9",
		"Active": 612,
		"Sept10": 696,
		"Sept9": 740,
		"Sept8": 768,
		"Sept7": 777,
		"Sept4": 773,
		"Sept3": 748
	},
	{
		"name": "Sept 10",
		"Active": 543,
		"Sept10": 777,
		"Sept9": 829,
		"Sept8": 861,
		"Sept7": 872,
		"Sept4": 868,
		"Sept3": 839
	},
	{
		"name": "Sept 11",
		"nodata" : 0,
		"Sept10": 868,
		"Sept9": 928,
		"Sept8": 967,
		"Sept7": 979,
		"Sept4": 974,
		"Sept3": 940
	},
	{
		"name": "Sept 12",
		"nodata" : 0,
		"Sept10": 969,
		"Sept9": 1040,
		"Sept8": 1085,
		"Sept7": 1099,
		"Sept4": 1094,
		"Sept3": 1054
	},
	{
		"name": "Sept 13",
		"nodata" : 0,
		"Sept10": 1082,
		"Sept9": 1165,
		"Sept8": 1217,
		"Sept7": 1234,
		"Sept4": 1228,
		"Sept3": 1181
	},
	{
		"name": "Sept 14",
		"nodata" : 0,
		"Sept10": 1209,
		"Sept9": 1304,
		"Sept8": 1365,
		"Sept7": 1385,
		"Sept4": 1378,
		"Sept3": 1324
	},
	{
		"name": "Sept 15",
		"nodata" : 0,
		"Sept10": 1350,
		"Sept9": 1461,
		"Sept8": 1532,
		"Sept7": 1555,
		"Sept4": 1547,
		"Sept3": 1484
	},
	{
		"name": "Sept 16",
		"nodata" : 0,
		"Sept10": 1508,
		"Sept9": 1637,
		"Sept8": 1719,
		"Sept7": 1746,
		"Sept4": 1736,
		"Sept3": 1663
	},
	{
		"name": "Sept 17",
		"nodata" : 0,
		"Sept10": 1684,
		"Sept9": 1833,
		"Sept8": 1929,
		"Sept7": 1960,
		"Sept4": 1949,
		"Sept3": 1864
	}
]

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

class Activepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OneWeek: true,
            TwoWeeks: true,
            activedata: {},
            LogView: true
        };
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
                <h3 style={{ marginBottom: 5 }}>Active Reported Cases</h3>
                <a><i><font size="2">Last updated Thursday, September 10 at 6:15pm.</font></i></a>

                <center>
                    <div>
                        <BrowserView>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ TwoWeeks: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width='65%' height='65%' aspect='2.2'>

                                {this.state.OneWeek ? (


                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                        <CartesianGrid />
                                        <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                        <Bar dataKey="Active" fill="#cc0000"><LabelList dataKey="Active" position="top" fontSize="12" /></Bar>
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (

                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                                            <CartesianGrid />
                                            <XAxis interval={1} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                            <Bar dataKey="Active" fill="#cc0000"><LabelList dataKey="Active" position="top" fontSize="12" /></Bar>
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                            {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                            <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                        </ComposedChart>

                                    )}



                            </ResponsiveContainer>
                        </BrowserView>

                        <MobileView>
                            <FormControlLabel control={<RedSwitch checked={this.state.OneWeek} onChange={() => this.setState({ OneWeek: !this.state.OneWeek })} name="OneWeek" />} label="Add projections" />
                            {/* <FormControlLabel control={<RedSwitch onChange={() => this.setState({ Sept4: !this.state.TwoWeeks })} name="TwoWeeks" />} label="Add projections - 2 Weeks" /> */}
                            <FormControlLabel control={<RedSwitch onChange={() => this.setState({ LogView: !this.state.LogView })} />} label="View on logarithmic scale" />
                            <ResponsiveContainer width={'99%'} height={'65%'} aspect='1'>

                                {this.state.OneWeek ? (
                                    <ComposedChart data={oneweek} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                        <CartesianGrid />
                                        <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                        {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                        <Bar dataKey="Active" fill="#cc0000">
                                            <LabelList dataKey="Active" position="top" fontSize="7" />
                                        </Bar>
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept10" dot={false} stroke="#666666" />) : ("")}
                                        {this.state.OneWeek ? (<Line type="monotone" dataKey="Sept3" dot={false} stroke="#666666" strokeDasharray="3 3" />) : ("")}
                                        <Tooltip wrapperStyle={{ fontSize: "12px" }} />
                                    </ComposedChart>
                                ) : (
                                        <ComposedChart data={zeroweeks} margin={{ top: 0, right: 20, bottom: 0, left: -10 }}>
                                            <CartesianGrid />
                                            <XAxis interval={2} dataKey="name" angle={-45} textAnchor="end" fontSize="12" height="60" />
                                            {this.state.LogView ? (<YAxis fontSize="12" />) : (<YAxis interval={8} scale="log" domain={['0', 'dataMax + 575']} fontSize="12" />)}
                                            <Bar dataKey="Active" fill="#cc0000">
                                                <LabelList dataKey="Active" position="top" fontSize="7" />
                                            </Bar>
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
                                <h4>Why are there two?</h4>
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

export default Activepage;