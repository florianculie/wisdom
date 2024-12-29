[console]::OutputEncoding = [System.Text.Encoding]::UTF8
$header = @("commit", "shortCommit","tree","parent","refs","subject","body","author","commiter") 
[string] $prettyGitLogDump= (git log --pretty=format:'%H|%h|%T|%P|%D|%s|%b|%an|%cn;') 
$gldata = foreach ($commit in $prettyGitLogDump.Replace("; ",';') -split  ";", 0, "multiline") {
          $prop = $commit -split "\|"
          $hash = [ordered]@{}
          for ($i=0;$i -lt $header.count;$i++) {$hash.add($header[$i],$prop[$i])} 
          [pscustomobject]$hash
}
$gldata |  ConvertTo-Json | Set-Content -Encoding UTF8 -Path ".\wisdom\src\assets\WisdomLogs.json" 

