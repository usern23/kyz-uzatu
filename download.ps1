$urls = @{
  'bride.jpeg'   = 'https://static.tildacdn.com/tild6661-6534-4631-a465-343935363338/0754333e-76a6-4eb5-8.jpeg'
  'photo2.jpeg' = 'https://static.tildacdn.com/tild3236-6365-4730-b062-613538656565/5b86acd7-7b42-4b43-a.jpeg'
  'orn-top.png' = 'https://static.tildacdn.com/tild6538-3130-4533-a566-626466643733/926dfbf4-5059-4292-9.png'
  'orn-1.png'   = 'https://static.tildacdn.com/tild3161-6333-4732-a639-626561653462/noroot.png'
  'orn-2.png'   = 'https://static.tildacdn.com/tild3631-6562-4061-b233-396361396234/noroot.png'
  'orn-3.png'   = 'https://static.tildacdn.com/tild3934-3135-4361-b536-383033623262/noroot.png'
  'orn-4.png'   = 'https://static.tildacdn.com/tild3534-3038-4338-a362-616536383634/noroot.png'
  'orn-5.png'   = 'https://static.tildacdn.com/tild6239-3331-4935-b537-666137343736/noroot.png'
  'orn-small.png' = 'https://static.tildacdn.com/tild3135-3361-4531-b631-383562333331/noroot.png'
  'logo.png'    = 'https://static.tildacdn.com/tild6665-3938-4562-b730-313365616238/Rrh5ZF3l9pyv313khL4_.png'
}
New-Item -ItemType Directory -Force -Path 'public/img/tilda' | Out-Null
foreach ($k in $urls.Keys) {
  try {
    Invoke-WebRequest -Uri $urls[$k] -OutFile "public/img/tilda/$k" -UseBasicParsing
    Write-Output "$k $((Get-Item public/img/tilda/$k).Length)"
  } catch {
    Write-Output "$k FAIL"
  }
}
