
try:
    # Fix UTF8 output issues on Windows console.
    # Does nothing if package is not installed
    from win_unicode_console import enable
    enable()
except ImportError:
    pass

from flask import Flask, render_template, request
import user_input
import os
app = Flask(__name__)

@app.route('/')
def index():
  label1 = u"مرحبا بك! المساعد الالي جاهز للرد على اسئلتك"
  label2 = 'السؤال'
  label3 = 'ادخال'
  return render_template('index.html', label1 = label1, label2 = label2, label3 = label3)


@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
     label1 = 'السؤال'
     label2 = 'الاجابة'
     label3 = 'ادخال'
     result = str(user_input.process_user_input(request.form['question']))
     print(result)
     return render_template("chatresult.html",result = result, question = request.form['question'], label1 = label1, label2 = label2, label3 = label3)


if __name__ == '__main__':
  app.run(debug=True)