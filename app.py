from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'supersecretkey'  # Necessário para o Flash messages


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Obtenha os dados do formulário
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Exemplo simples de validação
        if not name or not email or not message:
            flash('Please fill out all fields.', 'danger')
        else:
            flash('Your message has been sent successfully!', 'success')
            return redirect(url_for('contact'))

    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)
