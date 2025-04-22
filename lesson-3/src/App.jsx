import Card from "./components/Card";
import BoardHeader from "./components/Board Header";
import './App.css';

function App() {
  const listCard = [
    {
      taskName : "Mobile Wireframes",
      taskInfo : "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện",
      assignee : "MindX School",
      attachmentCount : 3,
      taskDeadline : "Apr 12"
    },
    {
      taskName : "Mobile Wireframes",
      taskInfo : "Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.",
      assignee : "Nguyễn Văn A",
      attachmentCount : 1,
      taskDeadline : "Apr 12"
    },
    {
      taskName : "Client Call",
      taskInfo : "Cuộc họp trực tuyến với khách hàng để thảo luận về yêu cầu dự án, cập nhật tiến độ và giải quyết các vấn đề phát sinh. Cần chuẩn bị tài liệu và câu hỏi trước cuộc họp.",
      assignee : "Trịnh Hồng M",
      attachmentCount : null,
      taskDeadline : "Apr 2"
    }
    
  ].map(item=>{
    return (
      <Card 
        taskName = {item.taskName}
        taskInfo = {item.taskInfo}
        assignee = {item.assignee}
        attachmentCount = {item.attachmentCount}
        taskDeadline = {item.taskDeadline}
      />
    )
  });

  const boardHeader = [
    {
      boardType : "To Do",
      cardCount : 3
    }
  ].map(item => {
    return (
      <BoardHeader 
        boardType = {item.boardType}
        cardCount = {item.cardCount}
      />
    )
  });

  return (
    <div className="board">
      <div style={{display:'flex'}}>{boardHeader}</div>
      <div>{listCard}</div>
    </div>
  )
}

export default App;