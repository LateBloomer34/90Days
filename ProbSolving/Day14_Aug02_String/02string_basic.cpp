#include<iostream>
using namespace std;


int main (){
    string str ;
    cout<<"size of str  is"<<str.size()<<endl;
    // input takes in strig- method 1 
    // for (int i = 0 ; i < 7 ; i++){
    //     cout<<"enter the string's "<<i<<"th element ";
    //     cin>>str[i];
    //     str.push_back(str[i]);
    // }

    // method 2 -
    // cin>>str; // it will not takes input after whitespace , tab or endl, it assume after whitespace element are for next variable


    // takes input with whitespace also
      getline(cin, str);  // all element goes inside string ncludeing whitespace 
    for (auto x:str){
        cout<<x;
    }
    cout<<endl;
    cout<<str<<endl;
    cout<<"size of str  is"<<str.size()<<endl;
    // getline(cin, str);
    // cout<<str<<endl;



    string str1 = "a";
    string add = str1+to_string(2);
    cout<<"result of add is "<<add<<endl;
    
    cout<<"end"<<endl;

     char str11 = 'a';
    char add1 = str11+2;
    cout<<add1<<endl;
    
    char a = 'a';
    char b = 'a';
    string c = string(1,b) + a;  // make string from char 'a', then add 'b'
    cout << c << endl;  

    int num1 = 1;
    char h = 'f';
    int g = num1+h;
    cout<<g<<endl;


    string name = "rakesh";
    sort(name.begin() , name.end());
    cout<<name<<endl;
    sort(name.rbegin() , name.rend());
    cout<<name<<endl;
    reverse(name.begin() , name.end());
    cout<<name<<endl;
  
}