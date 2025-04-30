import HeaderResults from '../components/HeaderResults/HeaderResults.tsx'
import Footer from '../components/Footer/Footer.tsx'
import {ResultsData} from '../data/Results.ts'
import {ResultsData2} from '../data/Results2.ts'
import './App.css'

function App() {
    return (
        <>
            <HeaderResults />
            <div className="content">
                <div className="container">
                    <section>
                        <div className="heading">
                            <h2>Результаты</h2>
                            <h3>Отборочного тура олимпиады для школьников 9 - 11 классов учебных заведений Донецкой
                                Народной Республики по информатике и компьютерным технологиям</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th rowSpan={2}>№ п/п</th>
                                    <th rowSpan={2}>ID</th>
                                    <th colSpan={4}>Баллы</th>
                                    <th rowSpan={2}>Время</th>
                                </tr>
                                <tr>
                                    <th>Всего</th>
                                    <th>1 ур.</th>
                                    <th>2 ур.</th>
                                    <th>3 ур.</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ResultsData.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.place}</td>
                                        <td>{result.id}</td>
                                        <td className="text-center">{result.scores.total}</td>
                                        <td className="text-center">{result.scores.level1}</td>
                                        <td className="text-center">{result.scores.level2}</td>
                                        <td className="text-center">{result.scores.level3}</td>
                                        <td className="text-center">{result.time}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <p>Во второй тур проходят участники, набравшие не менее 60 баллов.
                            Он стоится 26 апреля 2025 г. в аудитории 8.712 с 10:00 до 12:00.</p>
                    </section>
                    <section>
                        <div className="heading">
                            <h2>Результаты</h2>
                            <h3>Заключительного тура олимпиады для школьников 9 - 11 классов учебных заведений Донецкой
                                Народной Республики по информатике и компьютерным технологиям</h3>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th rowSpan={2}>Место</th>
                                    <th rowSpan={2}>ID</th>
                                    <th colSpan={4}>Баллы</th>
                                </tr>
                                <tr>
                                    <th>Всего</th>
                                    <th>1 ур.</th>
                                    <th>2 ур.</th>
                                    <th>3 ур.</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ResultsData2.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.place}</td>
                                        <td>{result.id}</td>
                                        <td className="text-center">{result.scores.total}</td>
                                        <td className="text-center">{result.scores.level1}</td>
                                        <td className="text-center">{result.scores.level2}</td>
                                        <td className="text-center">{result.scores.level3}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <p></p>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default App