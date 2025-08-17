import { students } from './dashboard_project/data.js';
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
