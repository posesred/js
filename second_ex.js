const playList = [
    { title: 'Learn to Code', dur: '5:34' },
    { title: 'Learn to Code', dur: '2:33' },
    { title: 'Learn to Skate', dur: '15:36' },
    { title: 'Learn to Code', dur: '8:32' },
    { title: 'Learn to Skate', dur: '10:17' },
    { title: 'Learn to Skate', dur: '15:36' },
    { title: 'Learn to Code', dur: '13:55' },
  ];
const sumCode = playList
.filter((item)=> item.title.includes("Code"))
.reduce((total,item)=> {
    const[min,sec] = item.dur.split(":");
    const minute = parseInt(min);
    const second = parseInt(sec);
    return total+minute+second/60;
},0);
console.log(sumCode);