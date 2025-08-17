import { students } from './data.js';
const posts = [
  { title: 'Post One', body: 'this is post one' },
  { title: 'Post two', body: 'this is post two' },
];

// function createPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 1000);
// }
// function getPosts() {
//   setTimeout(function () {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 3000);
// }
// createPost({ title: 'Post Three', body: 'this is post three' }, getPosts);

// const profile_info = [
//   {
//     name: 'Muhammad Shah',
//     role: 'Front-End Developer',
//     company: 'Botnostic Solutions',
//   },
// ];

// function createProfile(cb, profile) {
//   setTimeout(() => {
//     profile_info.push(profile);
//     cb();
//   }, 2000);
// }
// function getProfile() {
//   setTimeout(() => {
//     const div = document.getElementById('profile_container');
//     profile_info.forEach((profile) => {
//       console.log(profile.name);
//       div.innerHTML += `<h1>${profile.name}</h1>
//       <h2>${profile.role}</h2>
//       <h3>${profile.company}</h3> `;
//     });
//   }, 1000);
// }

// createProfile(getProfile, {
//   name: 'Naveed ',
//   role: 'React Developer',
//   company: 'Botnostic Solutions',
// });

// console.log(profile_info);

// const studentDiv = document.querySelectorAll('.student');
// const studentDetailDiv = document.querySelector('.student_detail');
// const studentSpan = document.getElementsByTagName('span');
// console.log(studentSpan);
// console.log(studentDiv);

let totalRecords = 0;
function getStudents() {
  const div = document.getElementById('profile_container');
  const container = document.createElement('div');
  container.classList.add('student_container');

  const header = document.createElement('div');
  header.classList.add('student_header');
  header.innerHTML = `
          <span>Name</span>
          <span>Roll No</span>
          <span>Grade</span>
          <span>Field</span>
          <span>Institute</span>
        `;

  container.appendChild(header);
  const loading = document.createElement('loading');
  loading.classList.add('loading');
  loading.textContent = 'Loading students...';
  container.appendChild(loading);

  const footerTable = document.createElement('div');
  footerTable.classList.add('footer');

  const recordSpan = document.createElement('span');
  recordSpan.classList.add('records');

  const bachelorSpan = document.createElement('span');
  bachelorSpan.classList.add('records');

  const AssociateSpan = document.createElement('span');
  AssociateSpan.classList.add('records');

  const OLevelSpan = document.createElement('span');
  OLevelSpan.classList.add('records');

  const ALevelSpan = document.createElement('span');
  ALevelSpan.classList.add('records');

  const BEdSpan = document.createElement('span');
  BEdSpan.classList.add('records');

  let bachelorCount = 0;
  let associateCount = 0;
  let bEdCount = 0;
  let aLevelCount = 0;
  let oLevelCount = 0;

  setTimeout(() => {
    loading.remove();
    students.forEach((student) => {
      const studentRow = document.createElement('div');
      studentRow.classList.add('student_row');
      studentRow.innerHTML = `
      <span>${student.name}</span>
      <span>${student.rollNo}</span>
      <span>${student.degree}</span>
      <span>${student.occupation}</span>
      <span>${student.Institute}</span>
      `;

      if (student.degree == 'Bachelors') {
        bachelorCount++;
      } else if (student.degree == 'Associate') {
        associateCount++;
      } else if (student.degree == 'B.Ed') {
        bEdCount++;
      } else if (student.degree == 'A-Level') {
        aLevelCount++;
      } else if (student.degree == 'O-Level') {
        oLevelCount++;
      }
      container.appendChild(studentRow);

      recordSpan.textContent = `Total Records: ${students.length} `;
      bachelorSpan.textContent = `Bachelors : ${bachelorCount}`;
      AssociateSpan.textContent = `Associates: ${associateCount}`;
      BEdSpan.textContent = `B.Ed: ${bEdCount}`;
      OLevelSpan.textContent = `O-Level: ${oLevelCount}`;
      ALevelSpan.textContent = `A-Level: ${aLevelCount}`;

      footerTable.appendChild(recordSpan);
      footerTable.appendChild(bachelorSpan);
      footerTable.appendChild(BEdSpan);
      footerTable.appendChild(AssociateSpan);
      footerTable.appendChild(ALevelSpan);
      footerTable.appendChild(OLevelSpan);
      container.appendChild(footerTable);
    });
  }, 2000);
  // if ((students.length = 0)) {
  //   recordSpan.textContent = 0;
  // }
  div.append(container);
}

getStudents();
