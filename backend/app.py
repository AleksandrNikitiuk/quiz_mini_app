from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/finish_message", methods = ['GET']) # 
def get_finish_message():
    if request.method == 'GET':
        correct_answers_number = int(request.args.get('correct_answers_number'))
        
        if correct_answers_number < 5:
            return jsonify({'message': 'Try again! Good luck 🍀'})
        elif correct_answers_number < 8:
            return jsonify({'message': 'Well done! 👍 You may try again to get a better result.'})
        elif correct_answers_number < 10:
            return jsonify({'message': 'Great job! ☀️'})
        else:
            return jsonify({'message': 'Congrats!💯'})
        

if __name__ == '__main__':
    app.run(debug=True)