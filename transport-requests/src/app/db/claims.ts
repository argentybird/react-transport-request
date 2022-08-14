export const claims = [
    {
        key: 1,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 1))).toLocaleDateString().replace(/[.]/g, '')}1`,
        createdAt: '2022-12-24 23:12:00',
        pointA: {  
            id: 1,
            name: "Точка 1",
            point: [55.74452768361703, 37.59870171546937]
        },
        pointB: {
            id: 5,
            name: "Точка 5",
            point: [55.768622243968636, 37.635185122489936]
        }
    }, 

    {
        key: 2,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 2))).toLocaleDateString().replace(/[.]/g, '')}2`,
        createdAt: '2022-12-17 11:12:00',
        pointA: {
            id: 3,
            name: "Точка 3",        
            point: [55.734610239740086, 37.61708021163941]
        },
        pointB: {
            id: 4,
            name: "Точка 4",        
            point: [55.74143554764418, 37.6222836971283]
        }
    }, 

    {
        key: 3,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 3))).toLocaleDateString().replace(/[.]/g, '')}3`,
        createdAt: '2022-12-23 09:01:00',
        pointA: {
            id: 1,
            name: "Точка 1",        
            point: [55.74452768361703, 37.59870171546937]
        },
        pointB: {
            id: 6,
            name: "Точка 6",        
            point: [55.68925809878761, 37.56701409816743]
        }
    }, 

    {
        key: 4,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 4))).toLocaleDateString().replace(/[.]/g, '')}4`,
        createdAt: '2022-07-11 08:12:00',
        pointA: {
            id: 3,
            name: "Точка 3",        
            point: [55.734610239740086, 37.61708021163941]
        },
        pointB: {
            id: 2,
            name: "Точка 2",        
            point: [55.74909900602814, 37.65735626220704]
        }
    }, 

    {
        key: 5,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 5))).toLocaleDateString().replace(/[.]/g, '')}5`,
        createdAt: '2022-06-24 10:24:00',
        pointA: {
            id: 6,
            name: "Точка 6",        
            point: [55.68925809878761, 37.56701409816743]
        },
        pointB: {
            id: 5,
            name: "Точка 5",        
            point: [55.768622243968636, 37.635185122489936]
        }
    }, 

]

