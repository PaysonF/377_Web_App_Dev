import smtplib
from email.message import EmailMessage

file = open('gifts.csv', 'r')
lines = file.readlines()

server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
print('authenticating')
server.login('payson675@gmail.com', 'password here')
server.login()
for line in lines:
    line = line.strip()
    name, gift, email = line.split(',')
    
    subject = 'Thank You for the Gift'
    message = 'Dear ' + name + ', Thank you for the ' + gift + '.'

    msg = EmailMessage()
    msg.set_content(message)
    msg['Subject'] = subject
    msg['From'] = 'pfowler24@hanoverstudents.org'
    msg['To'] = 'pfowler24@hanoverstudents.org'
    
    print('Sending...')
    server.send_message(msg)
    server.quit()
    print('Message Sent')