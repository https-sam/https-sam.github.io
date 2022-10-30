const fetcher = (uri) => {
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

  const wfh = (data) => {
    for (const employee of data.employees) {
      if (employee.wfh === "true") {
        console.log(`Q6. ${employee.firstName} is working from home`);
      }
    }
    return data;
  };

  fetcher(employeesDataURI)
    .then((data) => {
      console.log("Q1. ", data);
      console.log("Q2. ", data);
      console.log("Q3. ", data);
      logAns(data, "Q4. Total salary of the employees before raise is:");
      data = raiseTime(data);
      logAns(data, "Q5. Total salary of the employees after raise is:");
      data = wfh(data);
    })
    .catch((e) => console.log(e));
