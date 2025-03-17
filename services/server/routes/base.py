from flask import Blueprint

base_blueprint = Blueprint("base", __name__)

@base_blueprint.route("/")
def index():
    return "The API is running"
