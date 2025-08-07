#include<iostream>
using namespace std;

void sort (string s){
    int n = s.size();
    vector<int> index(26 , 0);


    // update the index array based on string 
    for (int i = 0 ; i < n ; i++){
        int position  = s[i] - 'A';
        index[position]++;
    }


    // print the result from index array by convert into character
    for (int i = 0 ; i < index.size() ; i++){
        if (index[i]>0){
            for (int j = 0 ; j< index[i] ; j++){
                cout<<char(i+'A')<<" ";
            }
        }
    }

}

int main (){
    string s = "HIMANSHUCHAMPAWAT";
    sort(s);
}