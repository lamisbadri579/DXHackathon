import BasicBars from "../components/BasicBars"
import BasicLineChart from "../components/BasicLineChart"
import  PieChart from "../components/PieChart"
const MyDashboard = () => {
  return (
    <div className="text-white flex flex-row gap-x-10 justify-center items-center h-screen">
      <BasicBars></BasicBars>
      <BasicLineChart></BasicLineChart>
      <PieChart/>
    </div>
  )
}

export default MyDashboard