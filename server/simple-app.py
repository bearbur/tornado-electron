# Load tornado module
from tornado.web import Application, RequestHandler
from tornado.ioloop import IOLoop

# URL request handler
class HelloHandler(RequestHandler):
  def get(self):
    self.write({'message': 'hello world'})

# define end points
def make_app():
  urls = [("/", HelloHandler)]
  return Application(urls)

# Start server
if __name__ == '__main__':
    app = make_app()
    app.listen(3000)
    IOLoop.instance().start()
