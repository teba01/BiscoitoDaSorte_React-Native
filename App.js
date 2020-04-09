import React, {Component} from 'react';
import { View, Text,Image,TouchableOpacity,StyleSheet}from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase:'',
      img:require('./src/biscoito.png'),
    };
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases = [
      'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.',
      'Tente de novo. Fracasse de novo. Mas fracasse melhor',
      'É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo',
      'Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer',
      'Na prosperidade, nossos amigos nos conhecem; na adversidade, nós é que conhecemos nossos amigos',
      'Nada acontece a menos que sonhemos antes',
      'oda ação humana, quer se torne positiva ou negativa, precisa depender de motivação',
      'No meio da dificuldade encontra-se a oportunidade',
      'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.',
      'Pedras no caminho? Eu guardo todas. Um dia, vou construir um castelo.',
'Otimismo é esperar pelo melhor. Confiança é saber lidar com o pior.',
'O destino é moldado pela força do pensamento. Pense sempre positivo.',
'É no fundo do poço que se cava o posso.',
'Os homens de sucesso são doadores e não tomadores de energia positiva.',
'Para encontrar o seu equilíbrio, na maioria das vezes, é preciso antes perdê-lo.',
'Promova uma faxina mental com afirmações e pensamentos positivos.',
'Busque ser feliz, sem ocultar a felicidade de ninguém.',
'Quanto mais você se supera, mais motivado fica.',
'É pra frente que se anda, é pra cima que se olha e é lutando que se conquista.',
'As melhores coisas da vida são gratuitas: abraços, sorrisos, amigos, beijos, família, dormir, amor, risos e boas lembranças',
'Treine sua mente para ver o lado bom de qualquer situação.',
'Se jogue no que te faz sorrir.',
'A força de dentro é maior que todos os ventos contrários.',
'Ninguém, além de você, está no controle da sua felicidade.',
'É no agir que a vida muda de forma.',
'A vida não precisa ser perfeita para ser maravilhosa.',
'Bons pensamentos atraem acontecimentos magníficos.',
'Espalhe amor, alegria, espiritualidade, energia boa e o que mais você puder.',
'A diferença entre o possível e o impossível está no tamanho da sua determinação',
'Nunca é tarde para ter um novo objetivo ou sonhar um sonho novo.',
'E para os dias sem cor, guarda chuva de flor.',
'Autoconfiança é o primeiro passo para se atingir o sucesso.'
    ];
  }
  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    
    this.setState({
      textoFrase: '" '+ this.frases[numeroAleatorio]+' "',
      img: require('./src/biscoitoAberto.png')
    });
  }
  render(){
return(

      <View style={styles.container}>
      <Image
      source={this.state.img}
      style={styles.img}
      />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
container:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
},
img:{
  width:250,
  height:250,
},
textoFrase:{
  fontSize:20,
  color:'#dd7b22',
  margin:30,
  fontStyle:'italic',
  textAlign:'center'
},
botao:{
  width:230,
  height:50,
  borderWidth:2,
  borderColor:'#dd7b22',
  borderRadius:25
},
btnArea:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
btnTexto:{
  fontSize:18,
  fontWeight:'bold',
  color:'#dd7b22'
}

});




export default App;