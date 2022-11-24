import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const SubheaderGrouping = () => {
    const allData = [
        {
            id: 1000,
            name: "James Butt",
            country: {
                name: "Algeria",
                source: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg"
            },
            company: "Benton, John B Jr",
            date: "2015-09-13",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: true,
            activity: 17,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 70663
        },
        {
            id: 1001,
            name: "Josephine Darakjy",
            country: {
                name: "Egypt",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
            },
            company: "Chanay, Jeffrey A Esq",
            date: "2019-02-09",
            status: {
                name : "proposal",
                color:"#805b36",
                bg : "#ffd8b2"
            },
            verified: true,
            activity: 0,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 82429
        },
        {
            id: 1002,
            name: "Art Venere",
            country: {
                name: "Panama",
                source: "https://cdn.britannica.com/22/7222-004-D49C5703/Flag-Panama.jpg"
            },
            company: "Chemel, James L Cpa",
            date: "2017-05-13",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 63,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 28334
        },
        {
            id: 1003,
            name: "Lenna Paprocki",
            country: {
                name: "Slovenia",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1200px-Flag_of_Slovenia.svg.png"
            },
            company: "Feltz Printing Service",
            date: "2020-09-15",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: false,
            activity: 37,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 88521
        },
        {
            id: 1004,
            name: "Donette Foller",
            country: {
                name: "South Africa",
                source: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg"
            },
            company: "Printing Dimensions",
            date: "2016-05-20",
            status: {
                name : "proposal",
                color:"#805b36",
                bg : "#ffd8b2"
            },
            verified: true,
            activity: 33,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 93905
        },
        {
            id: 1005,
            name: "Simona Morasca",
            country: {
                name: "Egypt",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
            },
            company: "Chapman, Ross E Esq",
            date: "2018-02-16",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 68,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 50041
        },
        {
            id: 1006,
            name: "Mitsue Tollner",
            country: {
                name: "Paraguay",
                source: "https://cdn.britannica.com/77/3377-004-6AA46F6E/Flag-Paraguay.jpg"
            },
            company: "Morlong Associates",
            date: "2018-02-19",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 54,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 58706
        },
        {
            id: 1007,
            name: "Leota Dilliard",
            country: {
                name: "Serbia",
                source: "https://cdn.britannica.com/39/94839-004-EEB20F36/Flag-Serbia.jpg"
            },
            company: "Commercial Press",
            date: "2019-08-13",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 69,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 26640
        },
        {
            id: 1008,
            name: "Sage Wieser",
            country: {
                name: "Egypt",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png"
            },
            company: "Truhlar And Truhlar Attys",
            date: "2018-11-21",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: true,
            activity: 76,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 65369
        },
        {
            id: 1009,
            name: "Kris Marrier",
            country: {
                name: "Mexico",
                source: "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg"
            },
            company: "King, Christopher A Esq",
            date: "2015-07-07",
            status: {
                name : "proposal",
                color:"#805b36",
                bg : "#ffd8b2"
            },
            verified: false,
            activity: 3,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 63451
        },
        {
            id: 1010,
            name: "Minna Amigon",
            country: {
                name: "Romania",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png"
            },
            company: "Dorl, James J Esq",
            date: "2018-11-07",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 38,
            representative: {
                name: "Anna Fali",
                image: "https://www.primefaces.org/primereact/images/avatar/annafali.png"
            },
            balance: 71169
        },
        {
            id: 1011,
            name: "Abel Maclead",
            country: {
                name: "Singapore",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png"
            },
            company: "Rangoni Of Florence",
            date: "2017-03-11",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 87,
            representative: {
                name: "Bernardo Dominic",
                image: "https://www.primefaces.org/primereact/images/avatar/bernardodominic.png"
            },
            balance: 96842
        },
        {
            id: 1012,
            name: "Kiley Caldarera",
            country: {
                name: "Serbia",
                source: "https://cdn.britannica.com/39/94839-004-EEB20F36/Flag-Serbia.jpg"
            },
            company: "Feiner Bros",
            date: "2015-10-20",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: false,
            activity: 80,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 92734
        },
        {
            id: 1013,
            name: "Graciela Ruta",
            country: {
                name: "Chile",
                source: "https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg"
            },
            company: "Buckley Miller & Wright",
            date: "2016-07-25",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: false,
            activity: 59,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 45250
        },
        {
            id: 1014,
            name: "Cammy Albares",
            country: {
                name: "Philippines",
                source: "https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg"
            },
            company: "Rousseaux, Michael Esq",
            date: "2019-06-25",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: true,
            activity: 90,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 30236
        },
        {
            id: 1015,
            name: "Mattie Poquette",
            country: {
                name: "Venezuela",
                source: "https://cdn.britannica.com/04/4904-004-EBEFDE35/Flag-Venezuela.jpg"
            },
            company: "Century Communications",
            date: "2017-12-12",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: false,
            activity: 52,
            representative: {
                name: "Anna Fali",
                image: "https://www.primefaces.org/primereact/images/avatar/annafali.png"
            },
            balance: 64533
        },
        {
            id: 1016,
            name: "Meaghan Garufi",
            country: {
                name: "Malaysia",
                source: "https://cdn.britannica.com/31/4031-004-82B0F3A9/Flag-Malaysia.jpg"
            },
            company: "Bolton, Wilbur Esq",
            date: "2018-07-04",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: false,
            activity: 31,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 37279
        },
        {
            id: 1017,
            name: "Gladys Rim",
            country: {
                name: "Netherlands",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png"
            },
            company: "T M Byxbee Company Pc",
            date: "2020-02-27",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 48,
            representative: {
                name: "Stephen Shaw",
                image: "https://www.primefaces.org/primereact/images/avatar/stephenshaw.png"
            },
            balance: 27381
        },
        {
            id: 1018,
            name: "Yuki Whobrey",
            country: {
                name: "Israel",
                source: "https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg"
            },
            company: "Farmers Insurance Group",
            date: "2017-12-21",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: true,
            activity: 16,
            representative: {
                name: "Bernardo Dominic",
                image: "https://www.primefaces.org/primereact/images/avatar/bernardodominic.png"
            },
            balance: 9257
        },
        {
            id: 1019,
            name: "Fletcher Flosi",
            country: {
                name: "Argentina",
                source: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
            },
            company: "Post Box Services Plus",
            date: "2016-01-04",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 19,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 67783
        },
        {
            id: 1020,
            name: "Bette Nicka",
            country: {
                name: "Paraguay",
                source: "https://cdn.britannica.com/77/3377-004-6AA46F6E/Flag-Paraguay.jpg"
            },
            company: "Sport En Art",
            date: "2016-10-21",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: false,
            activity: 100,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 4609
        },
        {
            id: 1021,
            name: "Veronika Inouye",
            country: {
                name: "Ecuador",
                source: "https://cdn.britannica.com/49/149-004-986E1BD8/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg"
            },
            company: "C 4 Network Inc",
            date: "2017-03-24",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: false,
            activity: 72,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 26565
        },
        {
            id: 1022,
            name: "Willard Kolmetz",
            country: {
                name: "Tunisia",
                source: "https://cdn.britannica.com/41/3041-004-F1D6DEFC/Flag-Tunisia.jpg"
            },
            company: "Ingalls, Donald R Esq",
            date: "2017-04-15",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 94,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 75876
        },
        {
            id: 1023,
            name: "Maryann Royster",
            country: {
                name: "Belarus",
                source: "https://cdn.britannica.com/01/6401-004-FAEACB4E/Flag-Belarus.jpg"
            },
            company: "Franklin, Peter L Esq",
            date: "2017-03-11",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 56,
            representative: {
                name: "Elwin Sharvill",
                image: "https://www.primefaces.org/primereact/images/avatar/elwinsharvill.png"
            },
            balance: 41121
        },
        {
            id: 1024,
            name: "Alisha Slusarski",
            country: {
                name: "Iceland",
                source: "https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg"
            },
            company: "Wtlz Power 107 Fm",
            date: "2018-03-27",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 7,
            representative: {
                name: "Stephen Shaw",
                image: "https://www.primefaces.org/primereact/images/avatar/stephenshaw.png"
            },
            balance: 91691
        },
        {
            id: 1025,
            name: "Allene Iturbide",
            country: {
                name: "Italy",
                source: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
            },
            company: "Ledecky, David Esq",
            date: "2016-02-20",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 1,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 40137
        },
        {
            id: 1026,
            name: "Chanel Caudy",
            country: {
                name: "Argentina",
                source: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
            },
            company: "Professional Image Inc",
            date: "2018-06-24",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: true,
            activity: 26,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 21304
        },
        {
            id: 1027,
            name: "Ezekiel Chui",
            country: {
                name: "Ireland",
                source: "https://cdn.britannica.com/33/1733-004-5BA407D6/FLAG-Ireland.jpg"
            },
            company: "Sider, Donald C Esq",
            date: "2016-09-24",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: false,
            activity: 76,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 60454
        },
        {
            id: 1028,
            name: "Willow Kusko",
            country: {
                name: "Romania",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png"
            },
            company: "U Pull It",
            date: "2020-04-11",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 7,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 17565
        },
        {
            id: 1029,
            name: "Bernardo Figeroa",
            country: {
                name: "Israel",
                source: "https://cdn.britannica.com/53/1753-004-03582EDA/Flag-Israel.jpg"
            },
            company: "Clark, Richard Cpa",
            date: "2018-04-11",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 81,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 17774
        },
        {
            id: 1030,
            name: "Ammie Corrio",
            country: {
                name: "Hungary",
                source: "https://cdn.britannica.com/55/1455-004-5897143C/Flag-Hungary.jpg"
            },
            company: "Moskowitz, Barry S",
            date: "2016-06-11",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: true,
            activity: 56,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 49201
        },
        {
            id: 1031,
            name: "Francine Vocelka",
            country: {
                name: "Honduras",
                source: "https://cdn.britannica.com/16/7216-004-F1400CA0/Flag-Honduras.jpg"
            },
            company: "Cascade Realty Advisors Inc",
            date: "2017-08-02",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 94,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 67126
        },
        {
            id: 1032,
            name: "Ernie Stenseth",
            country: {
                name: "Australia",
                source: "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
            },
            company: "Knwz Newsradio",
            date: "2018-06-06",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 68,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 76017
        },
        {
            id: 1033,
            name: "Albina Glick",
            country: {
                name: "Ukraine",
                source: "https://cdn.britannica.com/14/4814-004-7C0DF1BB/Flag-Ukraine.jpg"
            },
            company: "Giampetro, Anthony D",
            date: "2019-08-08",
            status: {
                name : "proposal",
                color:"#805b36",
                bg : "#ffd8b2"
            },
            verified: true,
            activity: 85,
            representative: {
                name: "Bernardo Dominic",
                image: "https://www.primefaces.org/primereact/images/avatar/bernardodominic.png"
            },
            balance: 91201
        },
        {
            id: 1034,
            name: "Alishia Sergi",
            country: {
                name: "Qatar",
                source: "https://cdn.britannica.com/76/5776-004-54A070FA/Flag-Qatar.jpg"
            },
            company: "Milford Enterprises Inc",
            date: "2018-05-19",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: false,
            activity: 46,
            representative: {
                name: "Ivan Magalhaes",
                image: "https://www.primefaces.org/primereact/images/avatar/ivanmagalhaes.png"
            },
            balance: 12237
        },
        {
            id: 1035,
            name: "Solange Shinko",
            country: {
                name: "Cameroon",
                source: "https://cdn.britannica.com/42/5042-004-7FF4ACCA/Flag-Cameroon.jpg"
            },
            company: "Mosocco, Ronald A",
            date: "2015-02-12",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 32,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 34072
        },
        {
            id: 1036,
            name: "Jose Stockham",
            country: {
                name: "Italy",
                source: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
            },
            company: "Tri State Refueler Co",
            date: "2018-04-25",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 77,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 94909
        },
        {
            id: 1037,
            name: "Rozella Ostrosky",
            country: {
                name: "Venezuela",
                source: "https://cdn.britannica.com/04/4904-004-EBEFDE35/Flag-Venezuela.jpg"
            },
            company: "Parkway Company",
            date: "2016-02-27",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: true,
            activity: 66,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 57245
        },
        {
            id: 1038,
            name: "Valentine Gillian",
            country: {
                name: "Paraguay",
                source: "https://cdn.britannica.com/77/3377-004-6AA46F6E/Flag-Paraguay.jpg"
            },
            company: "Fbs Business Finance",
            date: "2019-09-17",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: true,
            activity: 25,
            representative: {
                name: "Bernardo Dominic",
                image: "https://www.primefaces.org/primereact/images/avatar/bernardodominic.png"
            },
            balance: 75502
        },
        {
            id: 1039,
            name: "Kati Rulapaugh",
            country: {
                name: "Puerto Rico",
                source: "https://thumbs.dreamstime.com/b/puerto-rico-smoke-flag-united-states-dependent-territory-flag-puerto-rico-smoke-flag-united-states-dependent-territory-flag-143149842.jpg"
            },
            company: "Eder Assocs Consltng Engrs Pc",
            date: "2016-12-03",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: false,
            activity: 51,
            representative: {
                name: "Ioni Bowcher",
                image: "https://www.primefaces.org/primereact/images/avatar/ionibowcher.png"
            },
            balance: 82075
        },
        {
            id: 1040,
            name: "Youlanda Schemmer",
            country: {
                name: "Bolivia",
                source: "https://cdn.britannica.com/54/6754-004-AE3C4294/Flag-Bolivia.jpg"
            },
            company: "Tri M Tool Inc",
            date: "2017-12-15",
            status: {
                name : "negotiation",
                color:"#8a5340",
                bg : "#feedaf"
            },
            verified: true,
            activity: 49,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 19208
        },
        {
            id: 1041,
            name: "Dyan Oldroyd",
            country: {
                name: "Argentina",
                source: "https://cdn.britannica.com/69/5869-004-7D75CD05/Flag-Argentina.jpg"
            },
            company: "International Eyelets Inc",
            date: "2017-02-02",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 5,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 50194
        },
        {
            id: 1042,
            name: "Roxane Campain",
            country: {
                name: "France",
                source: "https://wallpaperaccess.com/full/397830.jpg"
            },
            company: "Rapid Trading Intl",
            date: "2018-12-25",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: false,
            activity: 100,
            representative: {
                name: "Anna Fali",
                image: "https://www.primefaces.org/primereact/images/avatar/annafali.png"
            },
            balance: 77714
        },
        {
            id: 1043,
            name: "Lavera Perin",
            country: {
                name: "Vietnam",
                source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png"
            },
            company: "Abc Enterprises Inc",
            date: "2018-04-10",
            status: {
                name : "qualified",
                color:"#256029",
                bg : "#c8e6c9"
            },
            verified: false,
            activity: 71,
            representative: {
                name: "Stephen Shaw",
                image: "https://www.primefaces.org/primereact/images/avatar/stephenshaw.png"
            },
            balance: 35740
        },
        {
            id: 1044,
            name: "Erick Ferencz",
            country: {
                name: "Belgium",
                source: "https://wallpaperaccess.com/full/1410986.jpg"
            },
            company: "Cindy Turner Associates",
            date: "2018-05-06",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: true,
            activity: 54,
            representative: {
                name: "Amy Elsner",
                image: "https://www.primefaces.org/primereact/images/avatar/amyelsner.png"
            },
            balance: 30790
        },
        {
            id: 1045,
            name: "Fatima Saylors",
            country: {
                name: "Canada",
                source: "https://img.freepik.com/premium-vector/canada-flag-floating-silk-background_183326-60.jpg?w=2000"
            },
            company: "Stanton, James D Esq",
            date: "2019-07-10",
            status: {
                name : "renewal",
                color:"#694382",
                bg : "#eccfff"
            },
            verified: true,
            activity: 93,
            representative: {
                name: "Onyama Limba",
                image: "https://www.primefaces.org/primereact/images/avatar/onyamalimba.png"
            },
            balance: 52343
        },
        {
            id: 1046,
            name: "Jina Briddick",
            country: {
                name: "Mexico",
                source: "https://cdn.britannica.com/73/2573-004-29818847/Flag-Mexico.jpg"
            },
            company: "Grace Pastries Inc",
            date: "2018-02-19",
            status: {
                name : "unqualified",
                color:"#c63737",
                bg : "#ffcdd2"
            },
            verified: false,
            activity: 97,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 53966
        },
        {
            id: 1047,
            name: "Kanisha Waycott",
            country: {
                name: "Ecuador",
                source: "https://cdn.britannica.com/49/149-004-986E1BD8/flag-design-similarities-Ecuador-Colombia-flags-Venezuela.jpg"
            },
            company: "Schroer, Gene E Esq",
            date: "2019-11-27",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: false,
            activity: 80,
            representative: {
                name: "Xuxue Feng",
                image: "https://www.primefaces.org/primereact/images/avatar/xuxuefeng.png"
            },
            balance: 9920
        },
        {
            id: 1048,
            name: "Emerson Bowley",
            country: {
                name: "Finland",
                source: "https://media.istockphoto.com/id/477121987/photo/finland-flag.jpg?s=170667a&w=0&k=20&c=GKBCRAnWlJLWrluLNtDzXIyKAO56gSQDgWO01df_RXY="
            },
            company: "Knights Inn",
            date: "2018-11-24",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: false,
            activity: 63,
            representative: {
                name: "Stephen Shaw",
                image: "https://www.primefaces.org/primereact/images/avatar/stephenshaw.png"
            },
            balance: 78069
        },
        {
            id: 1049,
            name: "Blair Malet",
            country: {
                name: "Finland",
                source: "https://media.istockphoto.com/id/477121987/photo/finland-flag.jpg?s=170667a&w=0&k=20&c=GKBCRAnWlJLWrluLNtDzXIyKAO56gSQDgWO01df_RXY="
            },
            company: "Bollinger Mach Shp & Shipyard",
            date: "2018-04-19",
            status: {
                name : "new",
                color:"#23547b",
                bg : "#b3e5fc"
            },
            verified: true,
            activity: 92,
            representative: {
                name: "Asia Javayant",
                image: "https://www.primefaces.org/primereact/images/avatar/asiyajavayant.png"
            },
            balance: 65005
        }
    ]

    const headerTemplate = (allData: { representative: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; image: any; }; }) => {
        return (
            <>
                <img src={allData.representative.image} alt="Image" width="32" style={{ verticalAlign: 'middle', marginRight:"6px" }} />
                <span className="image-text">{allData.representative.name}</span>
            </>
        );
    }

    const footerTemplate = (allData: { representative: { name: any; }; }) => {
        return <td className="font-bold">Total Customers: {calculateCustomerTotal(allData.representative.name)}</td>;
    }
    const calculateCustomerTotal = (name: any) => {
        let total = 0;
        if (allData) {
            for (let customer of allData) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }
        return total;
    }
    const countryDetail = (allData: { country: { source: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) => {
        return(
            <div className='flex'>
                <img src={allData.country.source} alt="Countary Flag" className='w-3rem mr-2 border-round shadow-3' />
                <span>{allData.country.name}</span>
            </div>
        )
     }
     const statusStyle = (allData: { status: { bg: any; color: any; name: string | number | boolean | React.ReactFragment | React.ReactPortal | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined; }; }) => {
        return <span style={{textTransform: "uppercase",fontWeight:"bold",fontSize:"12px",
                            backgroundColor:allData.status.bg, color:allData.status.color,padding:"4px",borderRadius:"2px" }}>{allData.status.name}</span>;
     }
  return (
    <div className='mx-6 mb-8'>
        <h1 className='text-center text-green-700 border-bottom-2 w-6 mb-8 mt-8 flex justify-content-center mx-auto'>Subheader Grouping Data Table Component</h1>
        <div className='p-4 surface-card border-round'>
            <h3 className='text-900 font-medium'>Subheader Grouping</h3>
            <DataTable value={allData} rowGroupMode="subheader" groupRowsBy='representative.name' sortMode='single' sortField='representative.name'
                        sortOrder={1} scrollHeight="500px" rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} scrollable>
                <Column field='name' header="Name" style={{width:"200px"}}></Column>
                <Column field='country' header="Country" body={countryDetail} style={{width:"200px"}}></Column>
                <Column field='company' header="Company" style={{width:"200px"}}></Column>
                <Column field='status' header="Status" body={statusStyle} style={{width:"200px"}}></Column>
                <Column field='date' header="Date" style={{width:"200px"}}></Column>
            </DataTable>
        </div>
    </div>
  )
}

export default SubheaderGrouping
