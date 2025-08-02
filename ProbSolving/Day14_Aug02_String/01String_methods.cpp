#include<iostream>
using namespace std;

int main (){
    string a = "10";
    string b = "20";

    // string concatination
    string d = a+b;
    cout<<d<<endl;

    // string concatination method 2
    d.append("UK");
    cout<<d<<endl;
    
    // to acess the element from a particular position
    cout<<"2nd index ele is "<<d[2]<<endl;;
    //push element in last position  - method 1
    d.push_back('g');
    cout<<d<<endl;

    //   push element in last position  - method 2

    d = d+"india";
    cout<<d<<endl;

    // remove last element
    d.pop_back();
    cout<<d<<endl;

    // insert character in a particular position
    d.insert(d.begin()+0 , 'd');
    cout<<d<<endl;
    d.insert(d.begin()+3 , 'h');
    cout<<d<<endl;
    d = "himanshu "+d;
    cout<<d<<endl;

    // sort the string
    sort(d.begin() , d.end());
    cout<<d<<endl;

    // reverse sort the string - method 1 
     sort(d.rbegin() , d.rend());
    cout<<d<<endl;
    string str = "himanshu";

     //  reverse the string , sort in reverse order - method 2
    reverse(str.begin(), str.end());
    cout<<str<<endl;


    // remove last element from string
    str.pop_back();
    cout<<str<<endl;

    // remove character from a particular position
    str.erase(str.begin()+3);
     cout<<str<<endl;
    
     sort(str.begin() , str.end());
     cout<<str<<endl;

     // reverse the string method 1-
    //  sort(str.rbegin() , str.rend());
    //  cout<<str<<endl;

    //    to get first element of string
    // method1 - 
    cout<<str[0]<<endl;
    cout<<str.front()<<endl;

    // access last leement of string
    // method 1 
    cout<<str[str.size()-1]<<endl;
    // method 2 
    cout<<str.back()<<endl;

    // to check the size of string
    cout<<"size of string is "<<str.size();
}