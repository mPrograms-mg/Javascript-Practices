const departments = [
  {
    name: "Human Resources",
    id: 1,
    code: "HR001",
    allowanceIds: [1, 2],
    carIds: [1, 3],
  },
  {
    name: "Engineering",
    id: 2,
    code: "ENG002",
    allowanceIds: [1, 3],
    carIds: [1, 2],
  },
  {
    name: "Marketing",
    id: 3,
    code: "MKT003",
    allowanceIds: [2, 4],
    carIds: [3, 2],
  },
];

// console.log(departments);

function idCheck(ids, depart) {
  //   depart.forEach((element) => {
  //     if (element.allowanceIds.includes(ids)) {
  //       console.log(element);
  //     }
  //   });
  //   const res = depart.filter((ele) => ele.allowanceIds.includes(ids));
  //   console.log(res);

  const departmentName = departments
    .map((department) =>
      department.allowanceIds.includes(ids) ? department.name : null
    )
    .filter((name) => name != null);

  console.log(departmentName);
}

idCheck(3, departments);
