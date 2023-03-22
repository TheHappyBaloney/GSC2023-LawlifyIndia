<?php
// Parse the table data from the Lawyer_Finder.html page
$html = file_get_contents('Lawyer_Finder.html');
$table_start = strpos($html, '<table');
$table_end = strpos($html, '</table>', $table_start) + 8;
$table_html = substr($html, $table_start, $table_end - $table_start);
$table = new SimpleXMLElement($table_html);

// Get the search query from the form submission
$specialization = $_POST['specialization'];
$location = $_POST['location'];

// Search the table data for matches
$matches = array();
foreach ($table->tbody->tr as $row) {
    $row_data = array();
    foreach ($row->td as $cell) {
        $row_data[] = (string) $cell;
    }
    if (strpos(strtolower(implode(' ', $row_data)), strtolower("$specialization $location")) !== false) {
        $matches[] = $row_data;
    }
}

// Display the search results
if (count($matches) > 0) {
    echo '<table>';
    foreach ($matches as $row_data) {
        echo '<tr>';
        foreach ($row_data as $cell_data) {
            echo "<td>$cell_data</td>";
        }
        echo '</tr>';
    }
    echo '</table>';
} else {
    echo 'No results found.';
}
?>
