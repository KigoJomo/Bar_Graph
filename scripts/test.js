const semData = [
    {
        title: "2.1",
        units: [
            { name: "Unit 1" },
            { name: "Unit 2" },

        ]
    },
    {
        title: "2.2",
        units: [
            { name: "Unit 1" },
            { name: "Unit 2" },
        ]
    },
]
semData.forEach((sem) => {
    sem.units.forEach((unit) => {
        unit.name
    })
})
