const execSh = require("exec-sh");
const fs=require('fs')

execSh(["git pull"], true,(err, stdout, stderr) => {
  console.log("error: ", err)
  console.log("stdout: ", stdout)
  console.log("stderr:", stderr)
  
  fs.writeFile('mynewfile3.txt', stdout, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  
  if (stdout==`git version 2.34.1
`) {
    console.log('asdfassdfasdfasad')
  }
})





// execSh("echo hello exec-sh && bash", { cwd: "/home" }, function(err){
  // if (err) {
    // console.log("Exit code: ", err.code);
  // }
// });

// run interactive bash shell
// execSh("echo lorem && bash", { cwd: "/home" }, (err) => {
  // if (err) {
    // console.log("Exit code: ", err.code);
    // return;
  // }

  // collect streams output
  // const child = execSh(["bash -c id", "echo lorem >&2"], true,
    // (err, stdout, stderr) => {
      // console.log("error: ", err);
      // console.log("stdout: ", stdout);
      // console.log("stderr: ", stderr);
    // });
// });