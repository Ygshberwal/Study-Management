from flask_restful import Resource, Api, reqparse, marshal_with, fields
from .models import StudyResource, db


api = Api(prefix='/api')

parser=reqparse.RequestParser()
parser.add_argument('topic', type=str, help="Topic is required and should be string", required=True)
parser.add_argument('description', type=str, help="Description is required and should be string", required=True)
parser.add_argument('resource_link', type=str, help="Resource link is required and should be string", required=True)


study_material_fileds={
    'id': fields.Integer,
    'topic': fields.String,
    'description': fields.String,
    'resource_link': fields.String
}


class StudyMaterial(Resource):
    @marshal_with(study_material_fileds)
    def get(self):
        all_study_material= StudyResource.query.all()
        # if len(all_study_material)>=0:
        #     return {"message":"No resource found"},404
        return all_study_material

    def post(self):
        args=parser.parse_args()
        study_resource=StudyResource(**args)
        db.session.add(study_resource)
        db.session.commit()
        return {"message": "Study Resource Created"}


api.add_resource(StudyMaterial, '/study_material')