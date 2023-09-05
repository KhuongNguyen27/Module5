<?php
function solve($S) {
    $isCheck = [];
    for($i=0; $i < strlen($S);$i++){
        $isCheck[] = 1;
    }
    $player = 0; 
    for($i=0; $i<strlen($S); $i++){
        switch($S[$i]){
            case '^':
                $player += 1;
                $isCheck[$i] = 0;
                break;
            case 'V':
                $player += 1;
                $isCheck[$i] = 0;
                break;
            case '>':
                if($isCheck[$i+1] == 0 || $i == (strlen($S)-1)){
                    $isCheck[$i] = 0;
                    $player += 1;
                }
                break;
            case '<':
                if($isCheck[$i-1]==0 || $i == 0){
                    $isCheck[$i] = 0;
                    $player += 1;
                }
                break;
        }   
    }
    return $player;
}
print_r(solve('<<V^>>'))
?>