class timelineItem {
    startHour: number;
    startMin: number;
    endHour: number;
    endMin: number;
    color: string;
    text: string;
  
    constructor(_startHour: number, _startMin: number, _endHour: number, _endMin: number, _color: string, _text: string) {
      this.startHour = _startHour;
      this.startMin = _startMin;
      this.endHour = _endHour;
      this.endMin = _endMin;
      this.color = _color;
      this.text = _text;
    }
  
    description() {
      return this.text + "——" + this.startHour + ":" + this.startMin + " - " + this.endHour + ":" + this.endMin;
    }

    colorStr() {
      return "#" + this.color;
    }
}

export { timelineItem }