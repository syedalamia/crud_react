from flask import Flask,render_template,request,redirect
from flask_mysqldb import MySQL
import  json;
from flask_cors import CORS,cross_origin;

app= Flask(__name__)


app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']=''
app.config['MYSQL_DB']='booklisht'

mysql=MySQL(app)

@app.route('/home')
@cross_origin()
def home():
   cur = mysql.connection.cursor()
   cur.execute("SELECT * FROM books")
   row_headers=[x[0] for x in cur.description]
   rv = cur.fetchall()
   json_data=[]
   for result in rv:
        json_data.append(dict(zip(row_headers,result)))
   return json.dumps(json_data)


#insert operation
@app.route('/insertion',methods=["POST"])
@cross_origin()
def insertion():
    userDetails=request.get_json()


    id = str(userDetails["id"]);
    name = str(userDetails["bookName"]);
    email = str(userDetails["author"]);
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO books(id,bookName,author) VALUES (%s, %s, %s)", (id, name, email))
    mysql.connection.commit()
    cur.close()
    return redirect



#data deletion
@app.route('/deletion', methods=['GET','POST'])
@cross_origin()

def deletion():
    del_request= request.values
    data=list(dict(del_request))
    id=str(data[0]) #the clicked string i get


    cur = mysql.connection.cursor()
    # cur.execute("DELETE FROM books WHERE id=%s", (id))
    cur.execute("DELETE FROM books WHERE id=%s", [id])
    mysql.connection.commit()
    cur.close()
    return redirect





    # del_id =request.args.get('language')
    # print(str(data.keys()))
    # items=data.keys();
    # print(items.index);


#data updating
@app.route('/updating',methods=["POST"])
@cross_origin()
def update():
    userDetails=request.get_json()
    print(userDetails)
    id = str(userDetails["id"]);
    name = str(userDetails["bookName"]);
    author = str(userDetails["author"]);
    cur = mysql.connection.cursor()
    cur.execute("UPDATE books SET bookName=%s,author=%s WHERE id=%s", (name,author,id))
    mysql.connection.commit()
    cur.close()
    return redirect





if __name__ == '__main__':
    app.run(debug=True)