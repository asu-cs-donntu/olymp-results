declare module '../data/Results' {
    const ResultsData: Array<{
        place: number
        id: string
        scores: {
            total: string
            level1: string
            level2: string
            level3: string
        }
        time: string
    }>
    export default ResultsData
}

