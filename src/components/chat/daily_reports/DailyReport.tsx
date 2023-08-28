class DailyReport {
  reportName: string;
  fetchData: () => Promise<[]>;
  filterData: (data: []) => [];
  constructor(
    reportName: string,
    fetchData: () => Promise<[]>,
    filterData: (data: []) => []
  ) {
    this.reportName = reportName;
    this.fetchData = fetchData;
    this.filterData = filterData;
  }
}
