#include<iostream>
#include<vector>
using namespace std;

int digonalPrint(vector<vector<int>> arr){
    int rowLen = arr.size();        // 4
    int colLen = arr[0].size();     // 4

    // First half - starting from top row
    int startCol = 0;    // coz row in constant in 1st case
    while (startCol < colLen) {
        int row = 0;
        int col = startCol;
        while (row < rowLen && col >= 0) {
            cout << arr[row][col] << " ";
            row++;
            col--;
        }
        startCol++;
    }

    // Second half - starting from leftmost column (excluding first row)
    int startRow = 1;     // row is constant in second case , and need to print from 1st row
    while (startRow < rowLen) {
        int row = startRow;
        int col = colLen - 1;
        while (row < rowLen && col >= 0) {  // col is increse from begining side till colLength
            cout << arr[row][col] << " ";
            row++;
            col--;
        }
        startRow++;
    }

    return 0;
}

int main() {
    vector<vector<int>> arr = {
        {4, 5, 6, 7},
        {7, 8, 9, 0},
        {3, 6, 9, 8}
    };
    digonalPrint(arr);
    return 0;
}
