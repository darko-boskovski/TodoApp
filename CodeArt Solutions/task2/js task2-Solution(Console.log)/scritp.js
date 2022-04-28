objArray = [
    {
      id: 1,
      name: "Resource #1",
      startDate: "20220101",
      endDate: "20220102",
      type: "campaign",
      region: "eu",
      code: "uk_1111"
    },
    {
      id: 2,
      name: "Resource #2",
      startDate: "20220102",
      endDate: "20220103",
      type: "order",
      region: "na",
      code: "usa_2222"
    },
    {
      id: 3,
      name: "Resource #3",
      startDate: "20220103",
      endDate: "20220104",
      type: "order",
      region: "na",
      code: "usa_3333"
    },
    {
      id: 4,
      name: "Resource #4",
      startDate: "20220104",
      endDate: "20220105",
      type: "campaign",
      region: "eu",
      code: "es_4444"
    },
    {
      id: 5,
      name: "Resource #5",
      startDate: "20220105",
      endDate: "20220106",
      type: "order",
      region: "eu",
      code: "it_5555"
    },
    {
      id: 6,
      name: "Resource #6",
      startDate: "20220106",
      endDate: "20220107",
      type: "campaign",
      region: "eu",
      code: "mk_1111"
    },
    {
      id: 7,
      name: "Resource #7",
      startDate: "20220107",
      endDate: "20220108",
      type: "order",
      region: "apac",
      code: "cn_7777"
    },
    {
      id: 8,
      name: "Resource #8",
      startDate: "20220108",
      endDate: "20220109",
      type: "campaign",
      region: "eu",
      code: "mk_8888"
    },
    {
      id: 9,
      name: "Resource #9",
      startDate: "20220109",
      endDate: "20220110",
      type: "order",
      region: "apac",
      code: "au_9999"
    },
    {
      id: 10,
      name: "Resource #10",
      startDate: "20220110",
      endDate: "20220111",
      type: "order",
      region: "latam",
      code: "mx_1010"
    },
    {
      id: 11,
      name: "Resource #11",
      startDate: "20220110",
      endDate: "20220111",
      type: "campaign",
      region: "latam",
      code: "mx_2332"
    }
  ]



function transformArray(RESOURCES, type){

    var filteredResources = RESOURCES.filter(element => element.type == type);
    var dictionary = {};
    filteredResources.forEach(element => {
        if(!(element.region in dictionary)){
            dictionary[element.region] = [];
        }
        dictionary[element.region].push({
                id: element.id,
                name: element.name,
                ...(type == 'campaign') && { campaign_id : element.code.split("_")[1]},
                ...(type == 'order') && { order_id : element.code.split("_")[1]},
                country: element.code.split("_")[0].toUpperCase(),
                startDate: element.startDate, 
                endDate: element.endDate,
               
            });
    })
    return dictionary
}



let result = transformArray(objArray, "campaign")
console.log(result)