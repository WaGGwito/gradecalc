
const calculateGrade = () => {

let studentName;
let studentMark;
let totalGrade;
let avgPoint = 100;
studentName = window.prompt('student name ::');
studentMark = window.prompt('Now enter exam score');
studentMark = Number(studentMark);

totalGrade = (studentMark / avgPoint) * 100;

if (totalGrade === avgPoint) {
    console.log('EXCELLENT.', 'GRADE : A')
}

else if ( totalGrade <= 40) {
     console.log('VERY POOR.', 'GRADE : F')
}

else if ( totalGrade <= 90) {
    console.log('VERY GOOD.', 'GRADE : B')
}

else if ( totalGrade <= 80) {
    console.log('GOOD.', 'GRADE : C')
}

else if( totalGrade <= 70) {
    console.log('YOU SELF.', 'GRADE : D')
}

else if( totalGrade <= 60) {
    console.log('DO BETTER.', 'GRADE : E')
}


};

calculateGrade()