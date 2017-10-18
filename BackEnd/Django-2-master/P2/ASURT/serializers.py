from rest_framework import serializers
from .models import Applicants


class ApplicantSerializer(serializers.ModelSerializer):

    # mobile=serializers.CharField(max_length=12)



    class Meta:
        model = Applicants
        # fields= ('name','email','mobile',"national_id","faculty","major","minor","expected_year","university","profilepic")
        fields="__all__"


    def validate_mobile(self,value):

        data=self.get_initial()
        mobile=data.get("mobile")

        if not mobile.isdigit():

            raise serializers.ValidationError("You entered a Character,dude!")

        if not ((mobile[0] == "0") and (mobile[1] == "1") and (mobile[2] == "1" or "2" or "5")):
            raise serializers.ValidationError("It must start with a 011,012,010,015")
        else:
            return mobile





    def validate_national_id(self,value):
        data2=self.get_initial()
        id=data2.get("national_id")
        if id.isdigit():
            return id
        else:
            raise serializers.ValidationError("You entered a Character,dude!")





    def validate_year(self,value):
        data3 = self.get_initial()
        year = data3.get("expected_year")
        if not year>"2017":
            raise serializers.ValidationError("You cannot be already graduated.")

        if year.isdigit():
            return year
        else:
            raise serializers.ValidationError("You entered a Character,dude!")



