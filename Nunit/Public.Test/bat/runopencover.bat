..\..\..\packages\OpenCover.4.5.2506\OpenCover.Console.exe -target:runtests.bat -register:user -output:Public.xml
..\..\..\packages\ReportGenerator.1.9.1.0\reportgenerator.exe -reports:Public.xml -targetdir:coverage