class OneMoment {
  constructor(date) {
    this.date = typeof date === `number` ? new Date(date) : date;
  }

  format(string) {
    return string
      .replace(/yyyy/i, this.date.getFullYear())
      .replace(/mm/i, this.date.getMonth() + 1)
      .replace(/dd/i, this.date.getDate())
  }

  fromNow() {
    const now = new Date();
    const days = (now - this.date) / 86400000;
    if(days > 365) return `${now.getFullYear() - this.date.getFullYear()} years ago`;
    if(days > 31) return `${now.getMonth() - this.date.getMonth()} months ago`;
    if(days > 14) return `${Math.floor((now.getDate() - this.date.getDate()) / 7)} weeks ago`;
    if(days > 1) return `${now.getDate() - this.date.getDate()} days ago`;
    if(days === 1) return 'one day ago';
    const minutes = (now - this.date) / 60000;
    if(minutes > 180) return `${Math.floor(minutes / 60)} hours ago`;
    if(minutes > 60) return 'one hour ago';
    if(minutes > 1) return `${Math.floor(minutes)} minutes ago`;
    return 'right now';
  }
  
  toDate() {
    return this;
  }
}



const now = new OneMoment(new Date());
const march27 = new OneMoment(1648365431000);

console.log(now.format('dd-mm-yyyy'), march27.format('dd/mm/yyyy'));
console.log(march27.fromNow());
const date = now.toDate()
console.log(date instanceof OneMoment);