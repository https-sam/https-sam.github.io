>const fetcher = (uri) => {
    return fetch(uri)
      .then((res) => res.json())
      .then((data) => data);
  };

  const employeesDataURI =
    "https://raw.githubusercontent.com/https-sam/https-sam.github.io/main/assignments/hmn/company.json";

  const logAns = ({ employees }, msg) => {
    let grossSalary = 0;
    for (const { salary } of employees) {
      grossSalary += parseInt(salary);
    }
    console.log(`${msg} ${grossSalary}`);
  };

  const raiseTime = (data) => {
    for (const employee of data.employees) {
      if (employee.raiseEligible) {
        employee.raiseEligible = false;
        employee.salary *= 1.1;
      }
    }
    return data;
  };

  fetcher(employeesDataURI)
    .then((data) => {
      console.log(data);
      logAns(data, "Total salary of the employees before raise is:");
      data = raiseTime(data);
      logAns(data, "Total salary of the employees after raise is:");
    })
    .catch((e) => console.log(e));
