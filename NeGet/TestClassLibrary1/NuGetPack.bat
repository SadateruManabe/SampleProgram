setlocal
@echo off

@rem SymbolPackageの生成
..\nuget.exe pack OssCons.DotNetSubcommittee.TestClassLibrary1.nuspec -OutputDirectory pkg -Symbols

@rem PrimaryPackageの生成（上書き）
..\nuget.exe pack OssCons.DotNetSubcommittee.TestClassLibrary1.nuspec -OutputDirectory pkg

pause