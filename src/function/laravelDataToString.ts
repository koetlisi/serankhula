export function extractMonthAndYear(dateString:any) {
    // Create a Date object from the dateString
    const date = new Date(dateString);

    // Get the month (0-based index, so add 1 to get the actual month)
    const month = date.getMonth() + 1;

    // Get the year
    const year = date.getFullYear();

    return `${month.toString().padStart(2, '0')}/${year}`;
}
